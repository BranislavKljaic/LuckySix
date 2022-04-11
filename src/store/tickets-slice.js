import { createSlice } from '@reduxjs/toolkit';
import {
  generateTicket,
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
      const newTicket = generateTicket();
      state.totalNumberOfTickets += 1;
      state.tickets.push({
        id: newTicket.id,
        numbers: newTicket.numbers,
        win: newTicket.win,
        jackpotCode: newTicket.jackpotCode,
        bet: action.payload.drawBet,
        numberOfDraw: action.payload.betCounter + 1,
      });
    },
    addCustomTicketToArrayOfTickets(state, action) {
      const newTicket = action.payload;
      state.totalNumberOfTickets += 1;
      state.tickets.push({
        id: generateTicketId(),
        numbers: newTicket.numbers,
        win: false,
        jackpotCode: generateJackpotCode(),
        bet: newTicket.bet,
      });
    },
    setWin(state, action) {
      state.tickets.forEach((element) => {
        if (checkIsWin(element.numbers, action.payload)) {
          state.wonTickets.push({
            id: element.id,
            numbers: element.numbers,
            win: true,
            jackpotCode: element.jackpotCode,
            bet: element.bet,
          });
        }
      });
    },
  },
});

export const ticketsSliceActions = ticketsSlice.actions;

export default ticketsSlice.reducer;
