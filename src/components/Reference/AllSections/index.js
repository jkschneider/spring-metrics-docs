import React from 'react';
import PropTypes from 'prop-types';
import Md from '../../Markdown';

import quickStartSrc from '../QuickStart/quickStart.md';
import metersSrc from '../Meters/meters.md';
import meterRegistriesSrc from '../MeterRegistries/meterRegistries.md';
import dimensionsSrc from '../Dimensions/dimensions.md';
import webfluxFnSrc from '../WebfluxFunctional/webfluxFn.md';

import Counters from '../Counters';
import Timers from '../Timers';

export default function AllSections({ quickStart, webfluxFn, counters, timers }) {
  return (
    <div>
      <Md source={quickStartSrc} templates={quickStart} />
      <Md source={metersSrc} />
      <Md source={meterRegistriesSrc} />
      <Md source={dimensionsSrc} />
      <Counters graph={counters.graph} />
      <Timers graph={timers.graph} baseUnit={timers.baseUnit} extra={timers.extra} />
      <Md source={webfluxFnSrc} templates={webfluxFn} />
    </div>
  );
}

AllSections.defaultProps = {
  webfluxFn: {},
};

AllSections.propTypes = {
  quickStart: PropTypes.shape({
    gradle: PropTypes.string,
    maven: PropTypes.string,
    enableAnnotation: PropTypes.string.isRequired,
    extraSetup: PropTypes.string,
  }).isRequired,

  webfluxFn: PropTypes.object,

  counters: PropTypes.shape({
    graph: PropTypes.node.isRequired,
  }).isRequired,

  timers: PropTypes.shape({
    graph: PropTypes.node.isRequired,
    baseUnit: PropTypes.string.isRequired,
    extra: PropTypes.string,
  }).isRequired,
};
