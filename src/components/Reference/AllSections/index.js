import React from 'react';
import PropTypes from 'prop-types';
import QuickStart from '../QuickStart';
import Counters from '../Counters';
import Md from '../../Markdown';
import meters from '../Meters/meters.md';
import meterRegistries from '../MeterRegistries/meterRegistries.md';
import dimensions from '../Dimensions/dimensions.md';

export default function AllSections({ quickStart }) {
  return (
    <div>
      <QuickStart templates={quickStart} />
      <Md source={meters} />
      <Md source={meterRegistries} />
      <Md source={dimensions} />
      <Counters />
    </div>
  );
}

AllSections.propTypes = {
  quickStart: PropTypes.object.isRequired,
};
