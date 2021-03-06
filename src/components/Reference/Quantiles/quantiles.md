## [Quantile Statistics](#quantiles)

Timers and distribution summaries can be enriched with [quantiles](https://en.wikipedia.org/wiki/Quantile) computed in your app prior to shipping
to a monitoring backend.

```java
Timer timer = meterRegistry.timerBuilder("my_timer")
                .quantiles(WindowSketchQuantiles.quantiles(0.5, 0.95).create())
                .create();
```

For distribution summaries, you can use `summaryBuilder(name)` which mirrors this construction.

This would result in additional gauges with tags `quantile=0.5` and `quantile=0.95`. The 0.95 quantile is the
the value below which 95% of observations in a group of observations fall. 0.5 represents the media of our
observations thus far.

It is also possible to indicate that you want to compute quantiles in an `@Timed` annotation:

```java
@RestController
public class MyController {
    @Timed(value = "list_people", quantiles = {0.5, 0.95})
    @GetMapping("/api/people")
    public List<Person> listPeople() { ... }
```

Four quantile algorithms are provided out of the box with different tradeoffs:

* `WindowSketchQuantiles` - The importance of an observation is decayed as it ages. This is the most computationally
costly algorithm.

```java
WindowSketchQuantiles.quantiles(0.5, 0.95)
    .error(0.01) // OPTIONAL, defaults to 0.05
    .create()
```

* `Frugal2UQuantiles` - Successive approximation algorithm that converges towards the true quantile with enough
observations. This is by least costly algorithm, but exhibits a higher error ratio in early observations.

```java
Frugal2UQuantiles
    // the closer the initial estimate (100) is to the true quantile, the faster it converges
    .quantile(0.95, 100)
    .quantile(0.5, 150)
    .create()
```

* `CKMSQuantiles` - Allows you to tradeoff computational complexity for error ratio on a per quantile basis. Often,
it is desirable for higher quantiles to have a lower error ratio (e.g. 0.99 at 1% error vs. 0.5 at 5% error). Still
more computationally expensive than Frugal.

```java
CKMSQuantiles
    .quantile(0.95, 0.01)
    .quantile(0.5, 0.05)
    .create()
```

* `GKQuantiles` - Allows you to tradeoff computational complexity for error ratio across all quantiles. This is
used inside of `WindowSketchQuantiles`.

```java
GKQuantiles.quantiles(0.5, 0.95)
    .error(0.01) // OPTIONAL, defaults to 0.05
    .create()
```
