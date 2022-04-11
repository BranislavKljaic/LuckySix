import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
import ShowWinTickets from '../countdown/ShowWinTickets';

import './DrawalGame.css';

import GameDrawedBalls from './GameDrawedBalls';

const DrawalGame = (props) => {
  const [nums, setNums] = useState([]);
  // const allTickets = useSelector((state) => state.tickets.tickets);

  useEffect(() => {
    props.array.forEach((element, j) => {
      setTimeout(() => {
        setNums((e) => [...e, element]);
      }, j * 300);
    });
  }, []);

  return (
    <div>
      <h1 className="drawal-title">
        Drawal game number:
        {props.counter}
      </h1>
      <div>
        <GameDrawedBalls drawedNumbers={nums.slice(0, 5)} />
        <GameDrawedBalls drawedNumbers={nums.slice(5, 15)} />
        <GameDrawedBalls drawedNumbers={nums.slice(15, 25)} />
        <GameDrawedBalls drawedNumbers={nums.slice(25, 35)} />
      </div>
      <div>
        <ShowWinTickets
          length={nums.length}
          numberOfDraw={props.counter}
          array={nums}
        />
      </div>
    </div>
  );
};

export default DrawalGame;
