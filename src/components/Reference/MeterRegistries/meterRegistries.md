## [Meter Registries](#meter-registries)

A registry creates and manages your application's set of meters. Exporters use the meter registry to iterate
over the set of meters instrumenting your application, and then further iterate over each meter's metrics, generally
resulting in a time series in the metrics backend for each combination of metrics and dimensions.

  Two meter registry implementations are provided out-of-the-box: `SpectatorMeterRegistry` and `PrometheusMeterRegistry`. Add one
or the other to your application context:

  ```java
@Bean
public MeterRegistry meterRegistry() { return new PrometheusMeterRegistry(); }
```

Then, inject the `MeterRegistry` elsewhere to create meters that you can use to instrument your app:

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
