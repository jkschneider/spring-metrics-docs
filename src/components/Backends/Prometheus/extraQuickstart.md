`@EnablePrometheusMetrics` also applies `@EnablePrometheusScraping` to your Spring Boot application which
enables a Spring Boot Actuator endpoint at `/prometheus` that presents a Prometheus
scrape with the appropriate format.

Here is an example `scrape_config` to add to prometheus.yml:

```yml
scrape_configs:
  - job_name: 'spring'
    metrics_path: '/prometheus'
    static_configs:
      - targets: ['HOST:PORT']
```
