## [Scheduling Instrumentation](#scheduling)

Enabling metrics in your Spring Boot application plus enabling AOP configures AOP advice that times
`@Scheduled` methods. For a method to be timed, it must be marked as `@Timed("my_metric_name")` with a name.

Depending on the duration of the scheduled task, you may want to choose to time the method with a `LongTaskTimer`,
a `Timer`, or both. Below is an example of measuring both long task and regular timings to a scheduled task:

```java
@Timed("beep")
@Timed(value = "long_beep", longTask = true)
@Scheduled(fixedRate = 1000)
void longBeep() {
    // calculate the meaning of life, then beep...
    System.out.println("beep");
}
```
