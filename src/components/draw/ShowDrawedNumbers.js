/* eslint-disable no-console */
import React from 'react';

import './ShowDrawedNumbers.css';
import DrawedBalls from './DrawedBalls';

const ShowDrawedNumbers = (props) => (
  <div className="drawal">
    {props.showNumbers.map((element) => (
      <div
        className="one-drawal"
        id={element.numberOfDrawing}
        key={element.numberOfDrawing}
      >
        <div className="one-drawal-infos">
          Number of drawing:
          {element.numberOfDrawing}
        </div>
        <div className="one-drawal-numbers">
          <DrawedBalls drawedNumbers={element.numbers.slice(0, 7)} />
          <DrawedBalls drawedNumbers={element.numbers.slice(7, 14)} />
          <DrawedBalls drawedNumbers={element.numbers.slice(14, 21)} />
          <DrawedBalls drawedNumbers={element.numbers.slice(21, 28)} />
          <DrawedBalls drawedNumbers={element.numbers.slice(28, 35)} />
          <div className="one-drawal-infos">
            Jackpot code:
            {element.jackpotCode}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default ShowDrawedNumbers;
