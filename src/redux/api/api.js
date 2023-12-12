import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const baseUrl = 'http://192.168.1.20:3500';
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
  endpoints: build => ({
    loginApi: build.mutation({
      query: args => {
        console.log('login', args);
        return {
          url: 'login',
          method: 'POST',
          body: args,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        };
      },
    }),
    signUpApi: build.mutation({
      query: args => {
        console.log('signUp', args);
        return {
          url: 'signup',
          method: 'POST',
          body: args,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        };
      },
    }),
  }),
});
export const {useLoginApiMutation, useSignUpApiMutation} = api;
