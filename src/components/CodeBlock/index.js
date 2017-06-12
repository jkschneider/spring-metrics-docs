import React from 'react';
import PropTypes from 'prop-types';
import Highlight from 'react-highlight';

export default function CodeBlock({ literal, language }) {
  return (
    <Highlight className={language}>{literal}</Highlight>
  );
}

CodeBlock.defaultProps = {
  literal: '',
  language: 'java',
};

CodeBlock.propTypes = {
  literal: PropTypes.string,
  language: PropTypes.string,
};
