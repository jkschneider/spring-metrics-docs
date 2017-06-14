import React from 'react';
import Ref from '../../Reference/AllSections';
import Md from '../../Markdown';

import mavenDeps from './pom.txt';
import extraQuickstart from './extraQuickstart.md';

import counterGraph from '../../../images/datadog-counter.png';

import timerGraph from '../../../images/datadog-timer.png';
import timerQuery from './timerQuery.md';
import extraTimer from './extraTimer.md';

export default function Datadog() {
  return (
    <div>
      <Ref
        quickStart={{
          gradle: '\ncompile \'com.netflix.spectator:spectator-api:latest.release\'',
          maven: `\n${mavenDeps.trimRight()}`,
          enableAnnotation: '@EnableDatadogMetrics',
          extraSetup: extraQuickstart,
        }}
        counters={{
          graph: (
            <div>
              <figure className="figure">
                <img src={counterGraph} className="figure-img img-fluid" alt="Datadog-rendered counter" />
                <figcaption className="figure-caption text-right">Counter over a positive-biased random walk.</figcaption>
              </figure>
              <strong>Datadog Query</strong>
              <Md source={'`counter`'} />
              <span>
                Datadog rate normalizes counters over a time window.
              </span>
            </div>
          ),
        }}
        timers={{
          graph: (
            <div>
              <figure className="figure">
                <img src={timerGraph} className="figure-img img-fluid" alt="Datadog-rendered timer" />
                <figcaption className="figure-caption text-right">Timer over a simulated service.</figcaption>
              </figure>
              <strong>Average Latency Query</strong>
              <Md source={timerQuery} />
            </div>
          ),
          baseUnit: 'Spectator records timings with a `long`, and so is biased to maintaining a base unit of nanoseconds. ' +
            'Datadog also expects nanoseconds as its base unit of time.',
          extra: extraTimer,
        }}
      />
    </div>
  );
}
