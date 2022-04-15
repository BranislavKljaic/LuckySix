/*
  Component which is called when counter comes to value 0 and game starts
  Every 2000ms (value specified in setTimeout) new number is pushed in array
  which is showing numbers on UI, hense, every 2000ms new number is shown on screen
  First 5 numbers don't have winning values, rest numbers does
  After game is done, under those numbers are shown won tickets just from that drawal
*/

import React, { useEffect, useState } from 'react';

import {
  generateWinAmounts,
  NUMBER_OF_DRAWED_BALLS,
} from '../../functions/Helpers';
import ShowWinTickets from '../gaming/ShowWinTickets';
import Ball from '../ticket/Ball';

import './DrawalGame.css';

const DrawalGame = (props) => {
  const { array, counter } = props;
  const [nums, setNums] = useState([]);
  const drawWinAmounts = generateWinAmounts();
  let i = 0;

  useEffect(() => {
    array.forEach((element, j) => {
      setTimeout(() => {
        if (i < 5) {
          setNums((e) => [...e, { value: element, winAmount: null }]);
          i += 1;
        } else {
          setNums((e) => [
            ...e,
            { value: element, winAmount: drawWinAmounts[i - 5] },
          ]);
          i += 1;
        }
      }, j * 300);
    });
  }, []);

  return (
    <div>
      <div>
        <h1 className="drawal-title">
          Drawal game number:
          {counter}
        </h1>

        <div className="all-five-drawed-numbers">
          <div className="first-five-numbers">
            {nums.slice(0, 5).map((num) => (
              <div className="one-drawal-number-first-five" key={num.value}>
                <Ball number={num.value} />
              </div>
            ))}
          </div>
        </div>

        <div className="all-drawed-numbers">
          <div className="other-numbers">
            {nums.slice(5, NUMBER_OF_DRAWED_BALLS).map((num) => (
              <div className="one-drawal-number-other-numbers" key={num.value}>
                <Ball number={num.value} />
                <div className="win-amount">{num.winAmount}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <ShowWinTickets
            length={nums.length}
            numberOfDraw={counter}
            array={nums}
            winAmounts={drawWinAmounts}
          />
        </div>
      </div>
    </div>
  );
};

export default DrawalGame;
