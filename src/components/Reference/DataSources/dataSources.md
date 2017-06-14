## [Data Source Monitoring](#data-sources)

Data sources can be instrumented with the registry. This requires
the `DataSourcePoolMetadataProvider` automatically configured by Spring
Boot, so only works in a Spring Boot context where these providers
are configured.

```java
@Configuration
class MyConfiguration {
    @Autowired
    private DataSource dataSource;

    @Autowired
    private Collection<DataSourcePoolMetadataProvider> metadataProviders;

    @Autowired
    private Environment env;

    @PostConstruct
    private void instrumentDataSource() {
        Meters.monitor(
            registry,
            dataSource,
            metadataProviders,
            "data_source", // base metric name
            "stack", env.acceptsProfiles("prod") ? "prod" : "test", // <- any number of tags
        );
    }
}
```

Data source instrumentation results in gauges representing the
currently active, maximum allowed, and minimum allowed connections
in the pool. Each of these gauges has a name which is prefixed by
the provided name ("data_source" in this example).

The original data source instance is unchanged by instrumentation.
