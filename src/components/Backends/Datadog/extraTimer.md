The Spectator Datadog `Timer` produces four time series, each with a different `statistic` tag:

1) `count` - Rate of calls per second.
2) `totaltime` - Rate of total time per second.
3) `totalofsquares` - Rate of total time squared per second (useful for standard deviation).
4) `max` - The maximum amount recorded.

To generate a graph of average latency, we divide the time series `totaltime/count`.

The `count` series alone gives you a measure of throughput in requests per second.
