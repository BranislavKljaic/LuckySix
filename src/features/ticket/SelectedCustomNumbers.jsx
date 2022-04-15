/*
  Component which shows numbers that user chosen for a ticket
*/

import React from 'react';

import './SelectedCustomNumbers.css';
import '../../shared/BallColors.css';
import Ball from './Ball';

const SelectedCustomNumbers = (props) => (
  <div className="numbers-array">
    {props.numbers.map((number) => (
      <div key={number}>
        <Ball number={number} onClick={() => {}} />
      </div>
    ))}
  </div>
);

export default SelectedCustomNumbers;
