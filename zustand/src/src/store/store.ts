import { create } from 'zustand';

// Define the type for the store (Not for JavaScript)
type CounterStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

// Create the store
export const useCounterStore = create<CounterStore>((set) => ({
  count: 0, // Initial state
  increment: () => set((state) => ({ count: state.count + 1 })), // Action to increment
  decrement: () => set((state) => ({ count: state.count - 1 })), // Action to decrement
}));
