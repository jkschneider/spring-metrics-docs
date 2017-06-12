import React from 'react';
import PropTypes from 'prop-types';
import summary from './quickstart.md';
import Md from '../../Markdown/index';

export default function Install({ templates }) {
  return (
    <Md source={summary} templates={templates} />
  );
}

Install.defaultProps = {
  templates: {},
};

Install.propTypes = {
  templates: PropTypes.objectOf(),
};
