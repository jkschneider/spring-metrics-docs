## [Meters](#meters)

A meter is the interface for collecting a set of measurements (which we individually call metrics) about your 
application. `spring-metrics` packs with a supported set of `Meter` primitives including: 
`Timer`, `Counter`, `Gauge`, `DistributionSummary`, and `LongTaskTimer`. Note that different meter types 
result in a different number of metrics. For example, while there is a single metric that represents a 
`Gauge`, a `Timer` measures both number of timed events and the total time of all events timed.
