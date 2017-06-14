import React from 'react';
import Ref from '../../Reference/AllSections';
import mavenDeps from './pom.txt';
import extraQuickstart from './extraQuickstart.md';
import counterGraph from '../../../images/prometheus-counter.png';
import Md from '../../Markdown';

import nonNormalizedCounterGraph from '../../../images/prometheus-counter-norate.png';

export default function Prometheus() {
  return (
    <div>
      <Ref
        quickStart={{
          gradle: '\ncompile \'io.prometheus:simpleclient_common:latest.release\'',
          maven: `\n${mavenDeps.trimRight()}`,
          enableAnnotation: '@EnablePrometheusMetrics',
          extraSetup: extraQuickstart,
        }}
        counters={{
          graph: (
            <div>
              <figure className="figure">
                <img src={counterGraph} className="figure-img img-fluid" alt="Graphana-rendered counter" />
                <figcaption className="figure-caption text-right">Counter over a positive-biased random walk.</figcaption>
              </figure>
              <strong>Prometheus Query</strong>
              <Md source={'```rate(counter[10s])```'} />

              <p>Representing a counter without rate normalizing over some time window is
                rarely useful, as the representation is a function of both the rapidity
                with which the counter is incremented and the longevity of the service.
                Below you can see how the counter drops back to zero on service restart.
                The rate normalized graph above would return back to a value around 55
                as soon as the new instance (say on a production deployment) was in service.</p>

              <figure className="figure">
                <img src={nonNormalizedCounterGraph} className="figure-img img-fluid" alt="Graphana-rendered counter (no rate)" />
                <figcaption className="figure-caption text-right">Counter over the same random walk, no rate normalization.</figcaption>
              </figure>
              <strong>Prometheus Query</strong>
              <Md source={'```counter```'} />
            </div>
          ),
        }}
        timers={{
          graph: (<div />),
          baseUnit: 'Prometheus recommends recording timings in seconds (as this is technically a base unit), but records this value as a `double`',
        }}
      />
    </div>
  );
}
