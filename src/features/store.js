import { configureStore } from '@reduxjs/toolkit';

//Slices
import themeSlice from './theme/themeSlice';
import todoSlice from './todo/todoSlice';

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    todo: todoSlice,
  },
});
