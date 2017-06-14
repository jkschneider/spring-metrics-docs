```json
{
  "requests": [
    {
      "q": "avg:longTaskTimer{statistic:duration} / avg:longTaskTimer{statistic:activetasks}",
      "type": "line",
      "conditional_formats": [],
      "aggregator": "avg"
    }
  ],
  "viz": "timeseries",
  "autoscale": true,
  "markers": [
    {
      "val": 20,
      "value": "y = 20",
      "type": "error dashed",
      "label": "max time allowed",
      "dim": "y"
    }
  ]
}
```
