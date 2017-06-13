The Datadog registry pushes metrics to datadoghq periodically. Below is a list of
the most common configuration properties you will want to change and their default values
(from any property source, e.g. application.yml):

```yml
datadog.apiKey: YOURKEY

# You will probably want disable Atlas publishing in a local development profile.
datadog.enabled: true

# The interval at which metrics are sent to Datadog. See Duration.parse for the expected format.
# The default is 10 seconds, which matches the Datadog Agent publishes at.
datadog.step: PT10S
```

For a full list of configuration properties that can influence Datadog publishing, see
`org.springframework.metrics.export.datadog.DatadogConfig`.
