import React, { PropTypes } from 'react';
import { Nav, NavItem, NavLink, Container } from 'reactstrap';
import Markdown from 'react-markdown';
import intro from './intro.md';

export default function App({ children }) {
  return (
    <Container>
      <div>
        <h1>Spring Metrics</h1>
        <Markdown source={intro} />
      </div>

      <div className="mt-3">
        <Nav pills>
          <NavItem>
            <NavLink href="/prometheus" active>Prometheus</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/datadog">Datadog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/atlas">Netflix Atlas</NavLink>
          </NavItem>
        </Nav>
      </div>

      <div className="mt-3">
        {children}
      </div>
    </Container>
  );
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};
