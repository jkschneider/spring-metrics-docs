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
          <NavLink href="#meter-registries">Meters and Registries</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#dimensions">Dimensions</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#counters">Counters</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#timers">Timers</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#long-task-timers">Long Task Timers</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#gauges">Gauges</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#summaries">Distribution Summaries</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#quantiles">Quantiles</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#histograms">Histograms</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#caches">Cache Monitoring</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#data-sources">Data Source Monitoring</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#executor-services">Executor Service Monitoring</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#web">Web Monitoring</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#scheduling">Scheduling Monitoring</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}
