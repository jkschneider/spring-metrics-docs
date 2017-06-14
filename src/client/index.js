import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import $ from 'jquery';
import routes from '../routes';

const hashLinkScroll = () => {
  const { hash } = window.location;
  if (hash !== '') {
    setTimeout(() => {
      const heading = $(`h2 a[href="${hash}"]`);
      if (heading.length) heading[0].scrollIntoView();
    }, 0);
  }
};

render(
  <Router history={browserHistory} routes={routes} onUpdate={hashLinkScroll} />,
  document.querySelector('#root')
);
