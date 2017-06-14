## [Cache Monitoring](#caches)

Guava caches can be instrumented with the registry, but it is important that you call `recordStats()` on
the `CacheBuilder`, as it is not possible to turn this on after the `Cache` is constructed.

```java
@Repository
class PersonRepository {
    LoadingCache<String, Person> personBySsn;

    public PersonRepository(MeterRegistry registry) {
        personBySsn = Meters.monitor(registry, CacheBuilder.newBuilder().recordStats().build(),
            "people_cache", // base metric name
            "lookup_key", "ssn" // <- any number of tag key/value pairs
        );
    }
}
```

Cache instrumentation results in several gauges whose names are
prefixed by the provided name ("people_cache" in this example),
corresponding to the stats recorded in `CacheStats`.

The original cache instance is unchanged by instrumentation.
