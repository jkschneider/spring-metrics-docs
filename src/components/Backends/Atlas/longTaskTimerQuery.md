```http
GET /api/v1/graph?
       q=
       name,longTaskTimer,:eq,statistic,duration,:eq,:and,
       :dup,
       70,:gt,:vspan,f00,:color,40,:alpha,alerted,:legend,
       70,f00,:color,alert+threshold,:legend       
       &tz=US/Central
       &s=e-15m
       &w=400
       &l=0
       &title=Peaks+of+Long+Tasks
       &ylabel=time
Host: localhost:7101
```
