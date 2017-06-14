## [Gauges](#gauges)

A gauge is a handle to get the current value. Typical examples for gauges
would be the size of a collection or map or number of threads in a running state.

`spring-metrics` takes the stance that gauges should be sampled and not set, so
there is no information about what might have occurred between samples. After all,
any intermediate values set on a gauge are lost by the time the gauge value is reported
to a metrics backend anyway, so there seems to be little value in setting those intermediate
values in the first place.

If it helps, think of a `Gauge` as a heisengauge - a meter that only changes when it
is observed.

The `MeterRegistry` interface contains a number of convenience methods for instrumenting
collections, maps, executors, and caches with gauges.

Lastly, Gauges are useful for monitoring things with natural upper bounds. We don't recommend
using a gauge to monitor things like request count, as they can grow without bound for
the duration of an application instance's life.

{extra}
