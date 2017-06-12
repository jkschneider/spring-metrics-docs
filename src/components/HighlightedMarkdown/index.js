import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';
import CodeBlock from './codeBlock';

export default function HighlightedMarkdown({ source }) {
  return (
    <Markdown renderers={{ CodeBlock }} source={source} />
  );
}

HighlightedMarkdown.defaultProps = {
  source: '',
};

HighlightedMarkdown.propTypes = {
  source: PropTypes.string,
};
