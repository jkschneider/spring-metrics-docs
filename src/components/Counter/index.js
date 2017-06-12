import React from 'react';
import summary from './summary.md';
import HighlightedMarkdown from '../HighlightedMarkdown';

export default function Counter() {
  return (
    <HighlightedMarkdown source={summary} />
  );
}
