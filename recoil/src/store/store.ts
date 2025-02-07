import { atom } from 'recoil';

// Define a  atom
export const counterState = atom({
  key: 'counter', // it should be unique for each atom
  default: 0, // initial value
});
