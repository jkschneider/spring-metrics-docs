
import React from 'react';
import { Router, browserHistory } from 'react-router';
import jquery from 'jquery';
import routes from '../routes';

// We need a Root component for React Hot Loading.
function Root() {
  // FIXME doesn't work for original page load
  const hashLinkScroll = () => {
    const { hash } = window.location;
    if (hash !== '') {
      setTimeout(() => {
        const heading = jquery(`h2 a[href="${hash}"]`);
        if (heading.length) heading[0].scrollIntoView();
      }, 0);
    }
  };

  return (
    <Router history={browserHistory} routes={routes} onUpdate={hashLinkScroll} />
  );
}

export default Root;
