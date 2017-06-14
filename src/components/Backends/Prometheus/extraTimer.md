The Prometheus `Timer` produces two counter time series with different names:

1) `${name}_count` - Total number of all calls.
2) `${name}_sum` - Total time of all calls.

For the same reasons cited in the Counters section, it is generally most useful to rate
normalize these time series to reason about them. Since Prometheus keeps track of discrete
events across all time, it has the advantage of allowing for the selection of an arbitrary 
time window across which to normalize at query time (e.g. `rate(timer_count[10s])` provides
a notion of requests per second over 10 second windows).
