import React from 'react';

import './Ticket.css';
import '../../shared/BallColors.css';

import { ballColor } from '../../functions/Helpers';

const Ticket = (props) => (
  <div className="ticket-box">
    {props.tickets.map((ticket) => (
      <div className="one-ticket" id={ticket.id} key={ticket.id}>
        <div className="ticket-numbers">
          <span className={`circle ${ballColor(ticket.numbers[0])}`}>
            {ticket.numbers[0]}
          </span>
          <span className={`circle ${ballColor(ticket.numbers[1])}`}>
            {ticket.numbers[1]}
          </span>
          <span className={`circle ${ballColor(ticket.numbers[2])}`}>
            {ticket.numbers[2]}
          </span>
          <span className={`circle ${ballColor(ticket.numbers[3])}`}>
            {ticket.numbers[3]}
          </span>
          <span className={`circle ${ballColor(ticket.numbers[4])}`}>
            {ticket.numbers[4]}
          </span>
          <span className={`circle ${ballColor(ticket.numbers[5])}`}>
            {ticket.numbers[5]}
          </span>
        </div>
        <div className="ticket-infos">
          <p className="ticket-info">
            Ticket ID:
            {ticket.id}
          </p>
          <p className="ticket-info">
            Jackpot code:
            {ticket.jackpotCode}
          </p>
          <p className="ticket-info">
            Number of draw:
            {ticket.numberOfDraw}
          </p>
          <p className="ticket-info">
            Bet:
            {ticket.bet}
          </p>
        </div>
      </div>
    ))}
  </div>
);

export default Ticket;
