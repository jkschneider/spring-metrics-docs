```json
{
  "requests": [
    {
      "q": "avg:timer{statistic:totaltime} / avg:timer{statistic:count}",
      "type": "line",
      "conditional_formats": [],
      "aggregator": "avg"
    }
  ],
  "viz": "timeseries",
  "autoscale": true
}
```
