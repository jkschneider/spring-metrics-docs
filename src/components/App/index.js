import React, { PropTypes } from 'react';
import { Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import Md from '../Markdown';
import TableOfContents from '../TableOfContents';
import intro from './intro.md';
import './style.scss';

export default function App({ children, location }) {
  const path = location.pathname;

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
            <Nav tabs>
              <NavItem>
                <NavLink href="/prometheus" active={path === '/prometheus'}>Prometheus</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/datadog" active={path === '/datadog'}>Datadog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/atlas" active={path === '/atlas'}>Netflix Atlas</NavLink>
              </NavItem>
            </Nav>
          </div>

          <div className="mt-3">
            {children}
          </div>
        </Col>
      </Row>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};
