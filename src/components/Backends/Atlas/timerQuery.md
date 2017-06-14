```http
GET /api/v1/graph?
       q=
       name,timer,:eq,statistic,count,:eq,:and
         request+count,:legend,
         1,:axis
       name,timer,:eq,statistic,totalTime,:eq,:and,
         name,timer,:eq,statistic,count,:eq,:and,
         :div,
         average+latency,:legend
         2,:lw
       &tz=US/Central
       &s=e-15m
       &w=400
       &l=0
       &title=Timer+of+Random+Latency
       &ylabel.0=seconds
       &ylabel.1=requests/second
Host: localhost:7101
```
