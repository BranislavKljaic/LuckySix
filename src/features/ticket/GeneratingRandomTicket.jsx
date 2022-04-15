/*
  Component which represents creating random ticket, user can just set bet value

  This components also has a button for starting game play
*/

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './GenerateRandomTicket.css';

import { useDispatch, useSelector } from 'react-redux';
import { ticketsSliceActions } from '../../store/tickets-slice';

import { CustomButton } from '../../components/buttons/CustomButton';
import CustomInputField from '../../components/fields/CustomInputField';

const GeneratingRandomTicket = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const [bet, setBet] = useState(1);

  const generateTicketHandler = () => {
    const obj = { drawBet: bet, betCounter: counter.counter };
    dispatch(ticketsSliceActions.addTicketToArrayOfTickets(obj));
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
          <CustomInputField
            valueType="number"
            setValue={setBet}
            minValue={1}
            maxValue={10}
            label="Bet"
            valueId="standard-number"
            setDefaultValue={1}
          />
        </div>
        <div className="start-game">
          <CustomButton onClick={() => history.push('/game')}>
            Start game
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default GeneratingRandomTicket;
