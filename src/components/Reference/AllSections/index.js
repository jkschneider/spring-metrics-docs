import React from 'react';
import PropTypes from 'prop-types';
import Md from '../../Markdown';

import quickStartSrc from '../QuickStart/quickStart.md';
import meterRegistriesSrc from '../MeterRegistries/meterRegistries.md';
import dimensionsSrc from '../Dimensions/dimensions.md';

import Counters from '../Counters';
import Timers from '../Timers';
import LongTaskTimers from '../LongTaskTimers';
import gaugeSrc from '../Gauges/gauges.md';
import summarySrc from '../Summaries/summaries.md';
import Quantiles from '../Quantiles';
import histogramSrc from '../Histograms/histograms.md';
import cacheSrc from '../Caches/caches.md';
import dataSourceSrc from '../DataSources/dataSources.md';
import executorServiceSrc from '../ExecutorServices/executorServices.md';
import webSrc from '../Web/web.md';
import schedulingSrc from '../Scheduling/scheduling.md';

export default function AllSections({
                                      quickStart,
                                      web,
                                      counters,
                                      timers,
                                      longTaskTimers,
                                      gauges,
                                    }) {
  return (
    <div>
      <Md source={quickStartSrc} templates={quickStart} />
      <hr />
      <Md source={meterRegistriesSrc} />
      <hr />
      <Md source={dimensionsSrc} />
      <hr />
      <Counters graph={counters.graph} />
      <hr />
      <Timers graph={timers.graph} baseUnit={timers.baseUnit} extra={timers.extra} />
      <hr />
      <LongTaskTimers graph={longTaskTimers.graph} />
      <hr />
      <Md source={gaugeSrc} templates={gauges} />
      <hr />
      <Md source={summarySrc} />
      <hr />
      <Quantiles />
      <hr />
      <Md source={histogramSrc} />
      <hr />
      <Md source={cacheSrc} />
      <hr />
      <Md source={dataSourceSrc} />
      <hr />
      <Md source={executorServiceSrc} />
      <hr />
      <Md source={webSrc} templates={web} />
      <hr />
      <Md source={schedulingSrc} />
    </div>
  );
}

AllSections.defaultProps = {
  web: {},
  gauges: {},
};

AllSections.propTypes = {
  quickStart: PropTypes.shape({
    gradle: PropTypes.string,
    maven: PropTypes.string,
    enableAnnotation: PropTypes.string.isRequired,
    extraSetup: PropTypes.string,
  }).isRequired,

  web: PropTypes.shape({
    extraWebfluxFn: PropTypes.string,
  }),

  counters: PropTypes.shape({
    graph: PropTypes.node.isRequired,
  }).isRequired,

  timers: PropTypes.shape({
    graph: PropTypes.node.isRequired,
    baseUnit: PropTypes.string.isRequired,
    extra: PropTypes.string,
  }).isRequired,

  longTaskTimers: PropTypes.shape({
    graph: PropTypes.node.isRequired,
    extra: PropTypes.string,
  }).isRequired,

  gauges: PropTypes.object,
};
