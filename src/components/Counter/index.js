import React from 'react';
import Markdown from 'react-markdown';
import summary from './summary.md';
import CodeBlock from '../CodeBlock';

export default function Counter() {
  return (
    <Markdown renderers={{ CodeBlock }} source={summary} />
  );
}
