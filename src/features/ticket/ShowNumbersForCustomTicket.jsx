/*
  Component which show numbers when creating custom ticket
  Showing all numbers from 1 to BALL_COUNT global variable
*/

import React from 'react';
import Ball from './Ball';
import './ShowNumbersForCustomTicket.css';

function ShowNumbersForCustomTicket(props) {
  const { numbersForPlay } = props;

  const pushNumberToTicket = (num) => {
    props.putNumberOnTicket(num);
  };

  return (
    <div className="choose-numbers">
      {numbersForPlay.map((number) => (
        <div key={number.value}>
          <Ball
            number={number.value}
            isSelected={number.isSelected}
            onClick={pushNumberToTicket}
            numbersForPlay={numbersForPlay}
          />
        </div>
      ))}
    </div>
  );
}

export default ShowNumbersForCustomTicket;
