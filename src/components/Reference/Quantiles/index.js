import React from 'react';
import quantiles from './quantiles.md';
import Md from '../../Markdown/index';
import algorithms from '../../../images/quantile-algorithms.png';

export default function Quantiles() {
  return (
    <div>
      <Md source={quantiles} />
      <span>Here is a demonstration of all four algorithms operating simultaneously on the
        same distribution:</span>
      <img className="img-fluid mt-3" src={algorithms} alt="Quantile Algorithms" />
    </div>
  );
}
