## [Long Task Timers](#long-task-timers)

The long task timer is a special type of timer that allows you to measure time while an
event being measured is *still running*. A timer does not record the duration
and until the task is complete.

Now consider a background process to refresh metadata from a data store.
For example, Edda caches AWS resources such as instances, volumes, auto-scaling
groups etc. Normally all data can be refreshed in a few minutes. If the AWS
services are having problems it can take much longer. A long duration timer can
be used to track the overall time for refreshing the metadata.

In a Spring application, it is common for such long running processes to be implemented with `@Scheduled`.
`spring-metrics` provides a special `@Timed` annotation for instrumenting these processes with a long
task timer:

```java
@Timed(value = "aws_scrape", longTask = true)
@Scheduled(fixedDelay = 360000)
void scrapeResources() {
    // find instances, volumes, auto-scaling groups, etc...
}
```

If we wanted to alert when this process exceeds `threshold`,
with a long task timer we will receive that alert at the first
reporting interval after we have exceeded the threshold. With a regular
timer, we wouldn't receive the alert until the first reporting interval after
the process completed, over an hour later!

{extra}
