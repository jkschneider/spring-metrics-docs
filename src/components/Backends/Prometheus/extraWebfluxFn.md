Separately, a router function generator is provided to add a scraping endpoint to a Webflux functional application:

```java
PrometheusMeterRegistry meterRegistry = new PrometheusMeterRegistry();
RouterFunction<ServerResponse> route = route(GET("/prometheus"),
    PrometheusFunctions.scrape(meterRegistry));
```

You can compose this router function with another router function(s) that are instrumented
with metrics.
