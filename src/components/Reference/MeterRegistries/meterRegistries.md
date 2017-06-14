## [Meters and Registries](#meter-registries)

A meter is the interface for collecting a set of measurements (which we individually call metrics) about your 
application. `spring-metrics` packs with a supported set of `Meter` primitives including: 
`Timer`, `Counter`, `Gauge`, `DistributionSummary`, and `LongTaskTimer`. Note that different meter types 
result in a different number of metrics. For example, while there is a single metric that represents a 
`Gauge`, a `Timer` measures both number of timed events and the total time of all events timed.

A registry creates and manages your application's set of meters. Exporters use the meter registry to iterate
over the set of meters instrumenting your application, and then further iterate over each meter's metrics, generally
resulting in a time series in the metrics backend for each combination of metrics and dimensions.

Three meter registry implementations are provided out-of-the-box: `SpectatorMeterRegistry`, 
`PrometheusMeterRegistry`, and `SimpleMeterRegistry`. The registries are generally created
incidentally by selecting a backend via `@EnableAtlasMetrics`, `@EnablePrometheusMetrics`, etc.

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
