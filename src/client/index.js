import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import $ from 'jquery';
import { createBrowserHistory } from 'history';

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

const history = createBrowserHistory();

history.listen((location) => {
  window.ga('set', 'page', location.pathname + location.search);
  window.ga('send', 'pageview');
});

render(
  <BrowserRouter basename={'/spring-metrics/docs/current/public'} history={history}>
    <App />
  </BrowserRouter>,
  document.querySelector('#root'),
  hashLinkScroll
);
