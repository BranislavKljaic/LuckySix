import React from 'react';

import './Ticket.css';
import '../../shared/BallColors.css';

import { ballColor } from '../../functions/Helpers';

const Ticket = (props) => {
  const { ticket, winAmounts } = props;
  return (
    <div className="ticket-box">
      <div className="one-ticket" id={ticket.id} key={ticket.id}>
        <div className="ticket-numbers">
          <span className={`circle ${ballColor(ticket.balls[0])}`}>
            {ticket.balls[0]}
          </span>
          <span className={`circle ${ballColor(ticket.balls[1])}`}>
            {ticket.balls[1]}
          </span>
          <span className={`circle ${ballColor(ticket.balls[2])}`}>
            {ticket.balls[2]}
          </span>
          <span className={`circle ${ballColor(ticket.balls[3])}`}>
            {ticket.balls[3]}
          </span>
          <span className={`circle ${ballColor(ticket.balls[4])}`}>
            {ticket.balls[4]}
          </span>
          <span className={`circle ${ballColor(ticket.balls[5])}`}>
            {ticket.balls[5]}
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
          {ticket.amountOfWin !== null ? (
            <p className="ticket-info">
              Won:
              {winAmounts[ticket.amountOfWin - 5]}
            </p>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
};

export default Ticket;
