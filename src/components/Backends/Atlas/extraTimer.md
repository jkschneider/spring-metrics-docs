While reading directly from a `Timer` returns a `double`, the underlying value 
stored in Spectator is a nanosecond-precise `long`. What precision is lost by 
converting to a `double` in the `Timer` interface will not affect a system like 
Atlas, because it will be configured to read measurements from the underlying 
Spectator `Timer` that `spring-metrics` is hiding from you.

The Spectator Atlas `Timer` produces four time series, each with a different `statistic` tag:

1) `count` - Rate of calls per second.
2) `totalTime` - Rate of total time per second.
3) `totalOfSquares` - Rate of total time squared per second (useful for standard deviation).
4) `max` - The maximum amount recorded.

Therefore, a requests per second line can be achieved with this query:

```http
name,timer,:eq,statistic,count,:eq,:and
```

Furthermore, `totalTime/count` represents average latency, and can be selected with the query:

```http
name,timer,:eq,statistic,totalTime,:eq,:and,
name,timer,:eq,statistic,count,:eq,:and,
:div,
```

In the example, you see these two lines plotted on a single dual-axis graph.
