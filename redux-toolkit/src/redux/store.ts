import { configureStore } from '@reduxjs/toolkit';
import CounterSlice from './slices/counter'; // Importing the slice to be used in the store

export const store = configureStore({
  reducer: {
    counter: CounterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>; //TS Thing

export type AppDispatch = typeof store.dispatch; //TS Thing
