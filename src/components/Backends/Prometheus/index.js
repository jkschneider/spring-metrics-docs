import React from 'react';
import Ref from '../../Reference/AllSections';
import maven from './pom.txt';

export default function Prometheus() {
  return (
    <div>
      <Ref
        quickStart={{
          gradle: 'compile \'io.prometheus:simpleclient_common:latest.release\'',
          maven: `${maven}`,
          enableAnnotation: '@EnablePrometheusMetrics',
        }}
      />
    </div>
  );
}
