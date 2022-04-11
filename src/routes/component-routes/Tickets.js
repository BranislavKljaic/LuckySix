import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';

import './Tickets.css';

import { useDispatch, useSelector } from 'react-redux';
import Ticket from '../../components/ticket/Ticket';

import { ticketsSliceActions } from '../../store/tickets-slice';
import { CustomButton } from '../../components/buttons/CustomButton';
import CustomTicket from '../../components/ticket/CustomTicket';
import CustomNumbers from '../../components/ticket/CustomNumbers';
import BetAmountField from '../../components/fields/BetAmountField';

const Tickets = () => {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.tickets);
  const counter = useSelector((state) => state.counter);

  const [ticketNumbers, setTicketNumbers] = useState([]);
  const [bet, setBet] = useState(1);
  const [customBet, setCustomBet] = useState(1);
  const [alert, setAlert] = useState(true);

  const generateTicketHandler = () => {
    const obj = { drawBet: bet, betCounter: counter.counter };
    dispatch(ticketsSliceActions.addTicketToArrayOfTickets(obj));
    setBet(1);
  };

  const deleteNumbers = () => {
    setTicketNumbers([]);
    setCustomBet(1);
    setAlert(true);
  };

  const ticketNumber = (num) => {
    if (
      (ticketNumbers.length === 6 && ticketNumbers.includes(num)) ||
      ticketNumbers.includes(num)
    ) {
      setTicketNumbers(ticketNumbers.filter((element) => element !== num));
    } else if (ticketNumbers.length > 5) {
      setAlert(true);
    } else if (!ticketNumbers.includes(num)) {
      setTicketNumbers((old) => [...old, num]);
    }
  };

  const payCustomTicket = () => {
    dispatch(
      ticketsSliceActions.addCustomTicketToArrayOfTickets({
        numbers: ticketNumbers.sort((a, b) => a - b),
        bet: customBet,
        numberOfDraw: counter.counter,
      }),
    );
    setTicketNumbers([]);
    setCustomBet(1);
  };

  return (
    <div>
      <div className="random-ticket">
        <div className="random-ticket-button">
          <CustomButton onClick={generateTicketHandler}>
            Generate random ticket
          </CustomButton>
        </div>
        <div className="random-ticket-bet">
          <BetAmountField bet={bet} setBet={setBet} />
        </div>
      </div>
      <div className="choose-ticket">
        <CustomTicket
          numbers={ticketNumbers}
          putNumberOnTicket={ticketNumber}
        />
      </div>
      <div className="custom-ticket-numbers">
        <div className="custom-ticket-numbers-balls">
          <CustomNumbers numbers={ticketNumbers} />
        </div>
        {ticketNumbers.length ? (
          <div className="custom-ticket-numbers-info">
            <BetAmountField bet={customBet} setBet={setCustomBet} />
            <IconButton aria-label="delete" onClick={deleteNumbers}>
              <DeleteIcon />
            </IconButton>
            {alert ? (
              <Alert severity="error">Ticket must have six numbers!</Alert>
            ) : (
              <></>
            )}
            <CustomButton onClick={payCustomTicket}>Pay ticket</CustomButton>
          </div>
        ) : (
          <div />
        )}
      </div>
      <div>
        <Ticket tickets={tickets.tickets} />
      </div>
    </div>
  );
};

export default Tickets;
