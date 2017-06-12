import React from 'react';
import Ref from '../../Reference/AllSections';
import maven from './pom.txt';

export default function Atlas() {
  return (
    <div>
      <Ref
        quickStart={{
          gradle: 'compile \'com.netflix.spectator:spectator-reg-atlas:latest.release\'',
          maven: `${maven}`,
          enableAnnotation: '@EnableAtlasMetrics',
        }}
      />
    </div>
  );
}
