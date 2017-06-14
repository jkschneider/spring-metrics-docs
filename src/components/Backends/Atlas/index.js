import React from 'react';
import Ref from '../../Reference/AllSections';
import Md from '../../Markdown';

import mavenDeps from './pom.txt';
import extraQuickstart from './extraQuickstart.md';

import counterGraph from '../../../images/atlas-counter.png';
import counterQuery from './counterQuery.md';

import timerGraph from '../../../images/atlas-timer.png';
import timerQuery from './timerQuery.md';
import extraTimer from './extraTimer.md';

import longTaskTimerGraph from '../../../images/atlas-long-task-timer.png';
import longTaskTimerQuery from './longTaskTimerQuery.md';

export default function Atlas() {
  return (
    <div>
      <Ref
        quickStart={{
          gradle: '\ncompile \'com.netflix.spectator:spectator-reg-atlas:latest.release\'',
          maven: `\n${mavenDeps.trimRight()}`,
          enableAnnotation: '@EnableAtlasMetrics',
          extraSetup: extraQuickstart,
        }}
        counters={{
          graph: (
            <div>
              <figure className="figure">
                <img src={counterGraph} className="figure-img img-fluid" alt="Atlas-rendered counter" />
                <figcaption className="figure-caption text-right">Counter over a positive-biased random walk.</figcaption>
              </figure>
              <strong>Atlas Query</strong>
              <Md source={counterQuery} />
            </div>
          ),
        }}
        timers={{
          graph: (
            <div>
              <figure className="figure">
                <img src={timerGraph} className="figure-img img-fluid" alt="Atlas-rendered timer" />
                <figcaption className="figure-caption text-right">Timer over a simulated service.</figcaption>
              </figure>
              <strong>Atlas Query</strong>
              <Md source={timerQuery} />
            </div>
          ),
          baseUnit: 'Spectator records timings with a `long`, and so is biased to maintaining a base unit of nanoseconds',
          extra: extraTimer,
        }}
        longTaskTimers={{
          graph: (
            <div>
              <figure className="figure">
                <img src={longTaskTimerGraph} className="figure-img img-fluid" alt="Atlas-rendered long task timer" />
                <figcaption className="figure-caption text-right">Simulated back-to-back long tasks.</figcaption>
              </figure>
              <p><strong>Atlas Query</strong></p>
              <Md source={longTaskTimerQuery} />
            </div>
          ),
        }}
      />
    </div>
  );
}
