import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import Ticket from '../ticket/Ticket';
import { ticketsSliceActions } from '../../store/tickets-slice';

const ShowWinTickets = (props) => {
  const { winAmounts } = props;
  const dispatch = useDispatch();
  const allWonTickets = useSelector((state) => state.tickets.wonTickets);
  const counter = useSelector((state) => state.counter.counter);
  let flag = false;

  if (props.length === 35) flag = true;

  useEffect(() => {
    dispatch(ticketsSliceActions.setWin(props.array));
  }, [flag]);

  return (
    <div>
      <div>
        {allWonTickets.map((ticket) => (
          <div>
            {props.length === 35 && counter === ticket.numberOfDraw ? (
              <Ticket ticket={ticket} winAmounts={winAmounts} />
            ) : (
              <div />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowWinTickets;
