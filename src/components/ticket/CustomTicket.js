import React from 'react';
import { allNumbers } from '../../functions/Helpers';
import './CustomTicket.css';
import CustomTicketNumbers from './CustomTicketNumber';

function CustomTicket(props) {
  const pushNumberToTicket = (num) => {
    props.putNumberOnTicket(num);
  };
  return (
    <div className="choose-numbers">
      <div>
        {allNumbers.slice(0, 8).map((num) => (
          <CustomTicketNumbers
            number={num}
            pushNumber={pushNumberToTicket}
            key={num}
          />
        ))}
      </div>
      <div>
        {allNumbers.slice(8, 16).map((num) => (
          <CustomTicketNumbers
            number={num}
            pushNumber={pushNumberToTicket}
            key={num}
          />
        ))}
      </div>
      <div>
        {allNumbers.slice(16, 24).map((num) => (
          <CustomTicketNumbers
            number={num}
            pushNumber={pushNumberToTicket}
            key={num}
          />
        ))}
      </div>
      <div>
        {allNumbers.slice(24, 32).map((num) => (
          <CustomTicketNumbers
            number={num}
            pushNumber={pushNumberToTicket}
            key={num}
          />
        ))}
      </div>
      <div>
        {allNumbers.slice(32, 40).map((num) => (
          <CustomTicketNumbers
            number={num}
            pushNumber={pushNumberToTicket}
            key={num}
          />
        ))}
      </div>
      <div>
        {allNumbers.slice(40, 48).map((num) => (
          <CustomTicketNumbers
            number={num}
            pushNumber={pushNumberToTicket}
            key={num}
          />
        ))}
      </div>
    </div>
  );
}

export default CustomTicket;
