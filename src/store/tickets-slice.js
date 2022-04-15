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
    // Adding random generated ticket to array of tickets
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
    // Adding custom generated ticket to array of tickets
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
    // Going through list of tickets and checking what ticket is win ticket
    // If ticket is win ticket it pushs that ticket to list of winning tickets
    setWin(state, action) {
      state.tickets.forEach((element) => {
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
