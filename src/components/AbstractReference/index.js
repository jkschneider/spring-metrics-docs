import React, { PropTypes } from 'react';
// import Markdown from 'react-markdown';
// import intro from './intro.md';

export default function AppReference({ children }) {
  return (
    { children }
  );
}

AppReference.propTypes = {
  children: PropTypes.node.isRequired,
};
