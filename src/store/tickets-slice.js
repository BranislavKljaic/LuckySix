import { createSlice } from '@reduxjs/toolkit';
import {
  generateNewTicket,
  generateTicketId,
  generateJackpotCode,
  checkIsWin,
} from '../functions/Helpers';

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [],
    totalNumberOfTickets: 0,
    wonTickets: [],
  },
  reducers: {
    addTicketToArrayOfTickets(state, action) {
      const newTicket = generateNewTicket();
      state.totalNumberOfTickets += 1;
      state.tickets.push({
        id: newTicket.id,
        balls: newTicket.balls,
        win: newTicket.win,
        jackpotCode: newTicket.jackpotCode,
        bet: action.payload.drawBet,
        numberOfDraw: action.payload.betCounter + 1,
        amountOfWin: null,
      });
    },
    addCustomTicketToArrayOfTickets(state, action) {
      const newTicket = action.payload;
      state.totalNumberOfTickets += 1;
      state.tickets.push({
        id: generateTicketId(),
        balls: newTicket.balls,
        win: false,
        jackpotCode: generateJackpotCode(),
        bet: newTicket.bet,
        numberOfDraw: newTicket.numberOfDraw + 1,
        amountOfWin: null,
      });
    },
    setWin(state, action) {
      state.tickets.forEach((element) => {
        // const indexOfLastNumber
        if (checkIsWin(element.balls, action.payload) !== false) {
          state.wonTickets.push({
            id: element.id,
            balls: element.balls,
            win: true,
            jackpotCode: element.jackpotCode,
            bet: element.bet,
            numberOfDraw: element.numberOfDraw,
            amountOfWin: checkIsWin(element.balls, action.payload),
          });
        }
      });
    },
  },
});

export const ticketsSliceActions = ticketsSlice.actions;

export default ticketsSlice.reducer;
