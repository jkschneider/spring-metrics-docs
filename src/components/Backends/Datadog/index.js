import React from 'react';
import Ref from '../../Reference/AllSections';
import extraQuickstart from './extraQuickstart.md';

export default function Datadog() {
  return (
    <div>
      <Ref
        quickStart={{
          enableAnnotation: '@EnableDatadogMetrics',
          extraSetup: extraQuickstart,
        }}
      />
    </div>
  );
}
