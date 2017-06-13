## [Counters](#counters)

Counters report a single metric, a count. The `Counter` interface allows you to increment by a fixed amount, and isn't
opinionated about whether that fixed amount may be negative.

When building graphs and alerts off of counters, generally you should be most interested in measuring the rate at
which some event is occurring over a given time interval. Consider a simple queue, counters could be used to measure
things like the rate at which items are being inserted and removed.

It's tempting at first to conceive of visualizing absolute counts rather than a rate, but carefully consider that
the absolute count is usually both a function of the rapidity with which something is used *and* the longevity of the
application instance under instrumentation. Building dashboards and alerts of the rate of a counter per some interval of
time disregards the longevity of the app.

Be sure to read through the timer section before jumping in to using a counters,
as timers record a count of the timed events as a separate metric. For those
pieces of code you intend to time, you do NOT need to add a counter separately!

The following code simulates a real counter whose rate exhibits some 
perturbation over a short time window.

```java
RandomEngine r = new MersenneTwister64(0);
Normal dist = new Normal(0, 1, r);

MeterRegistry registry = ...
Counter counter = registry.counter("counter");

Flux.interval(Duration.ofMillis(10))
        .doOnEach(d -> {
            if (dist.nextDouble() + 0.1 > 0) {
                counter.increment();
            }
        })
        .blockLast();
```
