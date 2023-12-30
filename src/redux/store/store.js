import {configureStore} from '@reduxjs/toolkit';
// Or from '@reduxjs/toolkit/query/react'
import {setupListeners} from '@reduxjs/toolkit/query';
import {api} from '../api/api';
import userData from '../slice/authSlice';
import tokenSlice from '../slice/tokenSlice';
import categorySlice from '../slice/categorySlice';

export const store = configureStore({
  reducer: {
    user: userData,
    token: tokenSlice,
    category: categorySlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: {warnAfter: 128},
      serializableCheck: {warnAfter: 128},
    }).concat(api.middleware),
});
setupListeners(store.dispatch);
