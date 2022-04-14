import React, { useState, useEffect } from 'react';
import './GeneratingCustomTicket.css';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { useDispatch, useSelector } from 'react-redux';
import { arrayOfAllNumbers, BALL_COUNT } from '../../functions/Helpers';

import ShowNumbersForCustomTicket from './ShowNumbersForCustomTicket';
import BetAmountField from '../../components/fields/BetAmountField';
import SelectedCustomNumbers from './SelectedCustomNumbers';
import { CustomButton } from '../../components/buttons/CustomButton';
import CustomDialog from '../../components/dialog/CustomDialog';

import { ticketsSliceActions } from '../../store/tickets-slice';

const GeneratingCustomTicket = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const [ticketNumbers, setTicketNumbers] = useState([]);
  const [customBet, setCustomBet] = useState(1);
  const [numbersForPlay, setNumbersForPlay] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);

  const allNumbers = arrayOfAllNumbers();

  useEffect(() => {
    for (let i = 0; i < BALL_COUNT; i += 1) {
      setNumbersForPlay((old) => [
        ...old,
        { value: allNumbers[i], isSelected: false },
      ]);
    }
  }, []);

  const unselectAllNumbers = () => {
    for (let i = 0; i < BALL_COUNT; i += 1) {
      numbersForPlay[i].isSelected = false;
    }
  };

  const deleteNumbers = () => {
    setTicketNumbers([]);
    setCustomBet(1);
    unselectAllNumbers();
  };

  const closeDialogHandler = () => {
    setOpenDialog(false);
  };

  const ticketNumber = (num) => {
    if (
      (ticketNumbers.length === 6 && ticketNumbers.includes(num)) ||
      ticketNumbers.includes(num)
    ) {
      setTicketNumbers(ticketNumbers.filter((element) => element !== num));
    } else if (ticketNumbers.length > 5) {
      setOpenDialog(true);
    } else if (!ticketNumbers.includes(num)) {
      setTicketNumbers((old) => [...old, num]);
    }
  };

  const payCustomTicket = () => {
    dispatch(
      ticketsSliceActions.addCustomTicketToArrayOfTickets({
        balls: ticketNumbers.sort((a, b) => a - b),
        bet: customBet,
        numberOfDraw: counter.counter,
      }),
    );
    setTicketNumbers([]);
    unselectAllNumbers();
  };

  return (
    <div className="custom-ticket">
      <div className="choose-ticket">
        <ShowNumbersForCustomTicket
          putNumberOnTicket={ticketNumber}
          numbersForPlay={numbersForPlay}
        />
      </div>
      <div className="custom-ticket-numbers">
        <div className="custom-ticket-numbers-balls">
          <SelectedCustomNumbers numbers={ticketNumbers} />
        </div>
      </div>
      <div>
        {ticketNumbers.length ? (
          <div className="custom-ticket-numbers-info">
            <BetAmountField bet={customBet} setBet={setCustomBet} />
            <IconButton aria-label="delete" onClick={deleteNumbers}>
              <DeleteIcon />
            </IconButton>
            <CustomButton onClick={payCustomTicket}>Pay ticket</CustomButton>
            <CustomDialog
              open={openDialog}
              onClose={closeDialogHandler}
              title="Maximum numbers on one ticket warning"
              description="In this version of lucky six, maximum numbers allowed per one ticket is six!"
            />
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

export default GeneratingCustomTicket;
