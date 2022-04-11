import React from 'react';

import './CustomTicketNumber.css';
import { ballColor } from '../../functions/Helpers';
import '../../shared/BallColors.css';

function CustomTicketNumbers(props) {
  function handler(event) {
    event.preventDefault();
    props.pushNumber(props.number);
  }
  return (
    <button
      type="submit"
      className={`number ${ballColor(props.number)}`}
      onClick={handler}
    >
      {props.number}
    </button>
  );
}

export default CustomTicketNumbers;
