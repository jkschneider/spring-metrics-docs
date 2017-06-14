import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import longTaskTimers from './longTaskTimers.md';
import Md from '../../Markdown/index';

export default function LongTaskTimer({ graph, extra }) {
  return (
    <Row>
      <Col sm="7">
        <Md source={longTaskTimers} templates={{ extra: `${extra}` }} />
      </Col>
      <Col sm="5">
        {graph}
      </Col>
    </Row>
  );
}

LongTaskTimer.defaultProps = {
  extra: '',
};

LongTaskTimer.propTypes = {
  graph: PropTypes.node.isRequired,
  extra: PropTypes.string,
};
