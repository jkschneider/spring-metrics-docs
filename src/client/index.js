import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import $ from 'jquery';

import App from '../components/App';

const hashLinkScroll = () => {
  const { hash } = window.location;
  if (hash !== '') {
    setTimeout(() => {
      const heading = $(`h2 a[href="${hash}"]`);
      if (heading.length) heading[0].scrollIntoView();
    }, 0);
  }
};

$(window).on('hashchange', hashLinkScroll);

render(
  <BrowserRouter basename={'/spring-metrics/docs/current/public'}>
    <App />
  </BrowserRouter>,
  document.querySelector('#root'),
  hashLinkScroll
);
