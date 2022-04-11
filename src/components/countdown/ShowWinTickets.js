import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import Ticket from '../ticket/Ticket';
import { ticketsSliceActions } from '../../store/tickets-slice';

const ShowWinTickets = (props) => {
  const dispatch = useDispatch();
  const allWonTickets = useSelector((state) => state.tickets.wonTickets);
  let flag = false;

  if (props.length === 35) flag = true;

  useEffect(() => {
    dispatch(ticketsSliceActions.setWin(props.array));
  }, [flag]);

  return (
    <div>
      <div>
        {props.length === 35 ? <Ticket tickets={allWonTickets} /> : <div />}
      </div>
    </div>
  );
};

export default ShowWinTickets;
