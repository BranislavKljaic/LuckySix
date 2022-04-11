import React from 'react';

import './CustomNumbers.css';
import '../../shared/BallColors.css';

import { ballColor } from '../../functions/Helpers';

function CustomNumbers(props) {
  return (
    <div className="numbers-array">
      {props.numbers.map((number) => (
        <span className={`array-number ${ballColor(number)}`} key={number}>
          {number}
        </span>
      ))}
    </div>
  );
}

export default CustomNumbers;
