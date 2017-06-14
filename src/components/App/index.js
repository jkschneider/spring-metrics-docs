import React from 'react';
import { Row, Col } from 'reactstrap';
import { Route, Redirect } from 'react-router';
import { NavLink } from 'react-router-dom';
import Md from '../Markdown';
import TableOfContents from '../TableOfContents';
import intro from './intro.md';
import './style.scss';

import Prometheus from '../Backends/Prometheus';
import Atlas from '../Backends/Atlas';
import Datadog from '../Backends/Datadog';

export default function App() {
  return (
    <div className="container-fluid">
      <Row>
        <Col sm="2" style={{ backgroundColor: '#F8F8FB' }}>
          <TableOfContents />
        </Col>

        <Col>
          <div>
            <h1>Spring Metrics</h1>
            <Md source={intro} />
          </div>

          <div className="mt-3">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <NavLink to="/prometheus" className={'nav-link'} activeClassName={'active'}>Prometheus</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/datadog" className={'nav-link'} activeClassName={'active'}>Datadog</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/atlas" className={'nav-link'} activeClassName={'active'}>Netflix Atlas</NavLink>
              </li>
            </ul>
          </div>

          <div className="mt-3">
            <Route exact path="/" render={() => <Redirect to="/prometheus" />} />
            <Route path="/prometheus" component={Prometheus} />
            <Route path="/atlas" component={Atlas} />
            <Route path="/datadog" component={Datadog} />
          </div>
        </Col>
      </Row>
    </div>
  );
}
