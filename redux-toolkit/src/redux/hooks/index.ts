//redux/hooks/index.ts
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>(); //for dispatching actions
export const useAppSelector = useSelector.withTypes<RootState>(); //for selecting state
