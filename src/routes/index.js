
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/App';

// Webpack 2 supports ES2015 `import()` by auto-
// chunking assets. Check out the following for more:
// https://webpack.js.org/guides/migrating/#code-splitting-with-es2015

const importPrometheus = (nextState, cb) => {
  import(/* webpackChunkName: "tools" */'../components/Backends/Prometheus')
    .then(module => cb(null, module.default))
    .catch((e) => { throw e; });
};

// We use `getComponent` to dynamically load routes.
// https://github.com/reactjs/react-router/blob/master/docs/guides/DynamicRouting.md
const routes = (
  <Route path="/" component={App}>
    <IndexRoute getComponent={importPrometheus} />
    <Route path="prometheus" getComponent={importPrometheus} />
  </Route>
);

// Unfortunately, HMR breaks when we dynamically resolve
// routes so we need to require them here as a workaround.
// https://github.com/gaearon/react-hot-loader/issues/288
if (module.hot) {
  require('../components/Reference/Counters');    // eslint-disable-line global-require
}

export default routes;
