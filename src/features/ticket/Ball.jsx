import React from 'react';

import { ballColor } from '../../functions/Helpers';
import './Ball.css';

import '../../shared/BallColors.css';

const Ball = (props) => {
  const { onClick, isSelected, numbersForPlay } = props;

  const doOnClick = () => {
    if (numbersForPlay !== undefined) {
      onClick(props.number);
      if (numbersForPlay[props.number - 1].isSelected === true) {
        numbersForPlay[props.number - 1].isSelected = false;
      } else {
        numbersForPlay[props.number - 1].isSelected = true;
      }
    }
  };

  return (
    <button
      type="submit"
      className={`number ${ballColor(props.number)} ${
        isSelected ? 'clicked-number' : ''
      }`}
      onClick={doOnClick}
    >
      {props.number}
    </button>
  );
};

export default Ball;
