import React from 'react';
import PropTypes from 'prop-types';
import QuickStart from '../QuickStart';
import Counters from '../Counters';

export default function AppReference({ quickStart }) {
  return (
    <div>
      <QuickStart templates={quickStart} />
      <Counters />
    </div>
  );
}

AppReference.defaultProps = {
  quickStart: {},
};

AppReference.propTypes = {
  quickStart: PropTypes.objectOf(),
};
