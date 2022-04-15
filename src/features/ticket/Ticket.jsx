/*
  Component which represents one Ticket with its information to show on the screen
*/
import React from 'react';

import './Ticket.css';
import '../../shared/BallColors.css';

import Ball from './Ball';

const Ticket = (props) => {
  const { ticket, winAmounts } = props;
  return (
    <div className="ticket-box">
      <div className="one-ticket" id={ticket.id} key={ticket.id}>
        <div className="ticket-numbers">
          {ticket.balls.map((ball) => (
            <Ball number={ball} />
          ))}
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
              {winAmounts[ticket.amountOfWin - 5] * ticket.bet}
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
