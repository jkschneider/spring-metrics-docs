In Prometheus, a gauge is a generalization of a counter that also happens to allow
for decrementing. If you view a gauge as something that is actively set by the application
application code rather than sampled, it is clear that your code would have to increment
and decrement the gauge as the size of the thing being measured changes. Diligent incrementing
and decrementing throughout the application code yields the same result as the heisengauge,
ultimately.
