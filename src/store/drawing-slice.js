import { createSlice } from '@reduxjs/toolkit';
import { generatingNewDrawal } from '../functions/Helpers';

const drawingSlice = createSlice({
  name: 'drawing',
  initialState: {
    drawedNumbers: [],
    numberOfDrawal: 0,
  },
  reducers: {
    // Generating informations for one drawal and pushing it to the list
    drawNumbers(state) {
      const newDrawal = generatingNewDrawal();
      state.numberOfDrawal += 1;
      state.drawedNumbers.push({
        jackpotCode: newDrawal.jackpotCode,
        numbers: newDrawal.numbers,
        winAmounts: newDrawal.winAmounts,
        numberOfDrawing: state.numberOfDrawal,
      });
    },
    getNumberOfDrawal(state) {
      return state.numberOfDrawal;
    },
  },
});

export const drawingSliceActions = drawingSlice.actions;

export default drawingSlice.reducer;
