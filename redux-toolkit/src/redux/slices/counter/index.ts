import { createSlice } from '@reduxjs/toolkit';

export const CounterSlice = createSlice({
  initialState: 0,
  name: 'counter',
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

export const { increment, decrement } = CounterSlice.actions;
export default CounterSlice.reducer;