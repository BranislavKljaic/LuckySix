import { createSlice } from '@reduxjs/toolkit';

// Counter is redux value which specifies the number of drawal
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 0,
  },
  reducers: {
    increment(state) {
      state.counter += 1;
    },
  },
});

export const counterSliceActions = counterSlice.actions;

export default counterSlice.reducer;
