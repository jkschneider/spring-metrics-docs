## [Executor and ExecutorService Monitoring](#executor-services)

`Executor` and `ExecutorService` instances can be instrumented with the registry. This includes any
specializations of these types created by `java.util.concurrent.Executors`. Additionally, you can
directly monitor `ThreadPoolTaskExecutor` and `ThreadPoolTaskScheduler` in a wholly similar way, but
they must be initialized prior to attempting to instrument them.

```java
@Configuration
class MyConfiguration {
    @Bean("worker_pool")
    ExecutorService workerPool(MeterRegistry registry) {
        return Meters.monitor(registry,
            Executors.newFixedThreadPool(8),
            "worker_pool",
            "threads", "8" // any number of tag key value pairs
        );
    }
}
```

`ExecutorService` instrumentation results in a composite counter that tracks
 the number of submitted, active, and completed tasks. Additionally, a timer records the
 execution time of tasks (plus a count of such tasks, since `Timer`s always track both count
 and totalTime statistics).

`Executor` instrumentation just records the execution time.
