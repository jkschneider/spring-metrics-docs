## [Web Instrumentation](#web)

`spring-metrics` contains built-in instrumentation for timings of requests made
to Spring MVC and Spring WebFlux server endpoints.

### Web MVC and Annotation-Based WebFlux

Adding `@EnableMetrics` to your `@SpringBootApplication` class autoconfigures these
interceptors.

The interceptors need to be enabled for every request handler or controller that you want
to time. Add `@Timed` to:

1. A controller class to enable timings on every request handler in the controller.
2. A method to enable for an individual endpoint. This is not necessary if you have it on the class.
3. A method with `longTask = true` to enable a long task timer for the method. Long task timers require a
separate metric name, and can be stacked with a short task timer.

```java
@RestController
@Timed // (1)
public class MyController {
    @GetMapping("/api/people")
    @Timed // (2)
    @Timed(value = "all_people", longTask = true) // (3)
    public List<Person> listPeople() { ... }
```

The `Timer` is registered with a name of `http_server_requests` by default. This can be changed by setting
`spring.metrics.web.server_requests.name`.

The `Timer` contains a set of dimensions for every request, governed by the primary bean `WebfluxTagConfigurer` or
`WebmvcTagConfigurer` (depending on which programming model you are using) registered in your application
context. If you don't provide such a bean, a default implementation is selected which adds the following dimensions:

1. `method`, the HTTP method (e.g. GET, PUT)
2. `status`, the numeric HTTP status code (e.g. 200, 201, 500)
3. `uri`, the URI template prior to variable substitution (e.g. /api/person/{id})
4. `exception`, the simple name of the exception class thrown (only if an exception is thrown)

In addition to the default tags provided, you can add fixed tags to individual
controllers or request methods via the `extraTags` attribute on `@Timed`:

```java
@Timed(extraTags = {"authenticated", "false"})
```

### Webflux Functional

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

{extraWebfluxFn}

### Client-side HTTP Instrumentation

Enabling metrics in your Spring Boot application configures a `BeanPostProcessor` for `RestTemplate`,
so every instance you create via the application context will be instrumented.

A timer is recorded for each invocation that includes tags for URI (before parameter substitution), host, and status.
The name of this timer is `http_client_requests`, and can be changed via the `spring.metrics.web.client_requests.name`
property.
