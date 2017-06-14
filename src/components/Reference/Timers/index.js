import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import timers from './timers.md';
import Md from '../../Markdown/index';

export default function Timer({ graph, baseUnit, extra }) {
  return (
    <Row>
      <Col sm="7">
        <Md source={timers} templates={{ baseUnit: `${baseUnit}`, extra: `${extra}` }} />
      </Col>
      <Col sm="5">
        {graph}
      </Col>
    </Row>
  );
}

Timer.defaultProps = {
  extra: '',
};

Timer.propTypes = {
  graph: PropTypes.node.isRequired,
  baseUnit: PropTypes.string.isRequired,
  extra: PropTypes.string,
};
