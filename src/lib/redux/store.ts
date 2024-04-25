import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './features/books/bookSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      books: bookSlice,
      // i can add more reducer(slice) here
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
