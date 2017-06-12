import React from 'react';
import PropTypes from 'prop-types';
import quickstart from './quickStart.md';
import Md from '../../Markdown/index';

export default function Install({ templates }) {
  return (
    <Md source={quickstart} templates={templates} />
  );
}

Install.defaultProps = {
  templates: {},
};

Install.propTypes = {
  templates: PropTypes.shape({
    gradle: PropTypes.string,
    maven: PropTypes.string,
    enableAnnotation: PropTypes.string,
  }),
};
