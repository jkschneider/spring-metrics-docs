## [Webflux Functional](#webflux-fn)

`spring-metrics` contains a filter that you can add to a `RouterFunction` to instrument timings to its routes.

  ```java
RouterFunctionMetrics metrics = new RouterFunctionMetrics(registry);

// OPTIONAL: the default is to record tags on method and status
metrics.defaultTags((req, resp) -> { /* custom tags here */ });

RouterFunction<ServerResponse> routes = RouterFunctions
    .route(GET("/person/{id}").and(accept(APPLICATION_JSON)),
        request -> ServerResponse.ok().build())
    .filter(metrics.timer(
        "http_server_requests", // metric name
        "instance", MY_INSTANCE_ID // optional tags
    ));
```

The filter applies to all routes defined by this router function.

{extra}
