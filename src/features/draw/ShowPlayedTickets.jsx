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
