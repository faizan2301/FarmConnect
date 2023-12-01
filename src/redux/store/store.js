import {configureStore} from '@reduxjs/toolkit';
// Or from '@reduxjs/toolkit/query/react'
import {setupListeners} from '@reduxjs/toolkit/query';
import {api} from '../api/api';
import userData from '../slice/authSlice';
import tokenSlice from '../slice/tokenSlice';

export const store = configureStore({
  reducer: {
    user: userData,
    token: tokenSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: {warnAfter: 128},
      serializableCheck: {warnAfter: 128},
    }).concat(api.middleware),
});
setupListeners(store.dispatch);
