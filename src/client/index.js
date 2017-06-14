
import React from 'react';
import { render } from 'react-dom';
import Root from './Root';

const root = document.querySelector('#root');

const mount = (RootComponent) => {
  render(
    <RootComponent />,
    root
  );
};

mount(Root);
