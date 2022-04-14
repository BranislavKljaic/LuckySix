import React from 'react';
// import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Play.css';

import Ticket from '../../features/ticket/Ticket';

import GeneratingCustomTicket from '../../features/ticket/GeneratingCustomTicket';
import GeneratingRandomTicket from '../../features/ticket/GeneratingRandomTicket';

const Tickets = () => {
  const tickets = useSelector((state) => state.tickets.tickets);
  const counter = useSelector((state) => state.counter.counter);
  // const history = useHistory();

  return (
    <div>
      {/* RANDOM TICKET */}
      <div>
        <GeneratingRandomTicket />
      </div>
      {/* CUSTOM TICKET */}
      <div>
        <GeneratingCustomTicket />
      </div>
      <div>
        {/* TICKET LIST */}
        <div className="tickets-show">
          {tickets.map((ticket) => (
            <div key={ticket.id}>
              {ticket.numberOfDraw === counter + 1 ? (
                <Ticket ticket={ticket} />
              ) : (
                <div />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tickets;
