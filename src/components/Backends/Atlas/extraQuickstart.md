Spectator's Atlas registry publishes metrics to an Atlas server periodically. Below is a list of
the most common configuration properties you will want to change and their default values
(from any property source, e.g. application.yml):

```yml
# The location of your Atlas server
atlas.uri: http://localhost:7101/api/v1/publish

# You will probably want disable Atlas publishing in a local development profile.
atlas.enabled: true

# The interval at which metrics are sent to Atlas. See Duration.parse for the expected format.
# The default is 1 minute.
atlas.step: PT1M
```

For a full list of configuration properties that can influence Atlas publishing, see
`com.netflix.spectator.atlas.AtlasConfig`.
