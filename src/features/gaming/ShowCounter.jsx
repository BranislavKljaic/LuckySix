/*
  Component which shows numbers from countdown
*/

import React from 'react';

import './ShowCounter.css';

const ShowCounter = (props) => <h1 className="counter">{props.counter}</h1>;

export default ShowCounter;
