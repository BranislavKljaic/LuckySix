/*
Component which lists winning tickets when all numbers specified by NUMBER_OF_DRAWED_BALLS global
constant are drawed, in that route under drawed balls
*/

import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { NUMBER_OF_DRAWED_BALLS } from '../../functions/Helpers';

import Ticket from '../ticket/Ticket';
import { ticketsSliceActions } from '../../store/tickets-slice';

const ShowWinTickets = (props) => {
  const { winAmounts } = props;
  const dispatch = useDispatch();
  const allWonTickets = useSelector((state) => state.tickets.wonTickets);
  const counter = useSelector((state) => state.counter.counter);
  let flag = false;

  if (props.length === NUMBER_OF_DRAWED_BALLS) flag = true;

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
