import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
import {
  generateWinAmounts,
  NUMBER_OF_DRAWED_BALLS,
} from '../../functions/Helpers';
import ShowWinTickets from '../countdown/ShowWinTickets';
import Ball from '../ticket/Ball';

import './DrawalGame.css';

const DrawalGame = (props) => {
  const [nums, setNums] = useState([]);
  // const allTickets = useSelector((state) => state.tickets.tickets);
  // const drawWinAmounts = useSelector(
  //   (state) => state.draws.drawedNumbers,
  // );
  const drawWinAmounts = generateWinAmounts();
  let i = 0;

  useEffect(() => {
    props.array.forEach((element, j) => {
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
          {props.counter}
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
            numberOfDraw={props.counter}
            array={nums}
            winAmounts={drawWinAmounts}
          />
        </div>
      </div>
    </div>
  );
};

export default DrawalGame;
