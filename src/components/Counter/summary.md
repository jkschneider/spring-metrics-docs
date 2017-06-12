## Counters

Counters report a single metric, a count. The `Counter` interface allows you to increment by a fixed amount, and isn't
opinionated about whether that fixed amount may be negative.

When building graphs and alerts off of counters, generally you should be most interested in measuring the rate at
which some event is occurring over a given time interval. Consider a simple queue, counters could be used to measure
things like the rate at which items are being inserted and removed.

It's tempting at first to conceive of visualizing absolute counts rather than a rate, but carefully consider that
the absolute count is usually both a function of the rapidity with which something is used *and* the longevity of the
application instance under instrumentation. Building dashboards and alerts of the rate of a counter per some interval of
time disregards the longevity of the app. This knowledge is built-into some metrics backends like Atlas, which only
consume the rate from counters.

```java
@RestController
public class MyController {
    List<Person> people = new ArrayList<Person>();
    Counter steveCounter;
    Timer findPersonTimer;

    public MyController(MeterRegistry registry) {
        // registers a gauge to observe the size of the population
        registry.collectionSize("population", people);

        // register a counter of questionable usefulness
        steveCounter = registry.counter("find_steve", /* optional tags here */);

        // register a timer -- though for request timing it is easier to use @Timed
        findPersonTimer = registry.timer("http_requests", "method", "GET");
    }

    @GetMapping("/api/person")
    public Person findPerson(@RequestParam String q) {
        return findPersonTimer.record(() -> { // use the timer!
            if(q.toLowerCase().contains("steve")) {
                steveCounter.increment(); // use the counter
            }

            return people.stream().filter(p -> /* etc */).findAny().orElse(null);
        });
    }
}
```
