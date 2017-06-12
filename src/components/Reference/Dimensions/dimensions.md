## [Dimensions/Tags](#dimensions)

A meter is uniquely identified by its name and dimensions. We use the term dimensions and tags interchangeably, and
the `spring-metrics` interface is `Tag` simply because it is shorter.

As a general rule it should be possible to use the name as a pivot. Dimensions allow a particular named metric
to be sliced to drill down and reason about the data. This means that if just the name is selected, then the user can drill down
using other dimensions and be able to reason about the value being shown.

Suppose we are trying to measure the number of threads in a thread pool and the number of rows in a database table.

### Recommended approach

```java
registry.counter("threadpool_size", "id", "server_requests")
registry.counter("db_size", "table", "users")
```

This variant provides enough context so that if just the name is selected the value can be reasoned about and
is at least potentially meaningful. For example if we select `threadpool.size` we can see the total number of
threads in all pools. Then we can group by or select an `id` to drill down further or perform comparative
analysis on the contribution of each functional area to the number of threads consumed by the instrumented app.


### Bad approach

```java
registry.counter("size",
    "class", "ThreadPool",
    "id", "server_requests");

registry.counter("size",
    "class", "Database",
    "table", "users");
```

In this approach, if we select `size` we will get a value that is an aggregate of the number of threads
and the number of items in a database. This time series is not useful without further dimensional drill-down.
