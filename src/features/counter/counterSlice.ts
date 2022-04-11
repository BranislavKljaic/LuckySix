import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// state.counter.counter sam promijenio iz state.counter.value
// jer mi uporno javlja gresku da value ne postoji
export const selectCount = (state: RootState) => state.counter.counter;
export const selectCountWithMessage = (state: RootState) => `Counter state is: ${state.counter.counter} `;

export default counterSlice.reducer;
