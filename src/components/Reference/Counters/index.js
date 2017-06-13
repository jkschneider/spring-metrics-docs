import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import counters from './counters.md';
import Md from '../../Markdown/index';

export default function Counter({ graph }) {
  return (
    <Row>
      <Col sm="7">
        <Md source={counters} />
      </Col>
      <Col sm="5">
        {graph}
      </Col>
    </Row>
  );
}

Counter.propTypes = {
  graph: PropTypes.node.isRequired,
};
