## [Timers](#timers)

Timers are useful for measuring short-duration latencies and the frequency of such events. All implementations of
`Timer` report at least the total time and count of events as separate time series.

As an example, consider a graph showing request latency to a typical web server. The server can be
expected to respond to many requests quickly, so the timer will be getting updated many times per second.

The appropriate base unit for timers does vary by metrics backend for good reason.
{baseUnit}. `spring-metrics` is decidedly un-opinionated
about this, but because of the potential for confusion, requires a `TimeUnit` when interacting
with `Timers`. `spring-metrics` is aware of the preferences of each implementation and stores your
timing in the appropriate base unit based on the implementation.

```java
public interface Timer extends Meter {
    ...
    void record(long amount, TimeUnit unit);
    double totalTime(TimeUnit unit);
}
```

{extra}
