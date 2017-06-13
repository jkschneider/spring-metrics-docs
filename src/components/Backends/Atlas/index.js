import React from 'react';
import Ref from '../../Reference/AllSections';
import mavenDeps from './pom.txt';
import extraQuickstart from './extraQuickstart.md';
import Md from '../../Markdown';
import counterGraph from '../../../images/atlas-counter.png';
import counterQuery from './counterQuery.txt';

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
      />
    </div>
  );
}
