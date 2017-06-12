import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import format from 'string-template';
import CodeBlock from './codeBlock';

export default function Markdown({ source, templates }) {
  return (
    <ReactMarkdown renderers={{ CodeBlock }} source={format(source, templates)} />
  );
}

Markdown.defaultProps = {
  source: '',
  templates: {},
};

Markdown.propTypes = {
  source: PropTypes.string,
  templates: PropTypes.objectOf(),
};
