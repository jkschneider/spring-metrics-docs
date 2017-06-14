import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default function TableOfContents() {
  return (
    <div>
      <h3 className="mt-3">Table of Contents</h3>
      <Nav vertical>
        <NavItem>
          <NavLink href="#quickstart">Quick Start</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#meters">Meters</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#meter-registries">Meter Registries</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#dimensions">Dimensions</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#counters">Counters</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#timers">Counters</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#webflux-fn">Webflux Functional</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}
