import React from 'react';

import './SelectedCustomNumbers.css';
import '../../shared/BallColors.css';
import Ball from './Ball';

function CustomNumbers(props) {
  return (
    <div className="numbers-array">
      {props.numbers.map((number) => (
        <div key={number}>
          <Ball number={number} onClick={() => {}} />
        </div>
      ))}
    </div>
  );
}

export default CustomNumbers;
