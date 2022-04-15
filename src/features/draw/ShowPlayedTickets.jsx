/*
  Component which shows history tickets when Tickets are chosen on dropdown menu
  from the drawal which is chosen from other dropdown menu
*/

import React from 'react';

import Ticket from '../ticket/Ticket';

const ShowPlayedTickets = (props) => {
  const { numberOfDrawal, typeOfDrawal } = props;

  return (
    <div>
      {props.showTickets.map((ticket) => (typeOfDrawal === 'Tickets' && numberOfDrawal === ticket.numberOfDraw ? (
        <Ticket ticket={ticket} />
      ) : (
        <div />
      )))}
    </div>
  );
};

export default ShowPlayedTickets;
