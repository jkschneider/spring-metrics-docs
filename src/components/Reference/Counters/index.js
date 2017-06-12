import React from 'react';
import summary from './summary.md';
import Md from '../../Markdown/index';

export default function Counter() {
  return (
    <Md source={summary} />
  );
}
