import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const baseUrl = 'http://192.168.1.3:3500';
// const baseUrl = 'https://farm-server.vercel.app/';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
  endpoints: build => ({
    //API: Authentication
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
    verifyOtpApi: build.mutation({
      query: args => {
        console.log('verifyOtp', args);
        return {
          url: 'otp-verify',
          method: 'POST',
          body: args,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        };
      },
    }),
    //API: Products
    getCategories: build.mutation({
      query: args => {
        console.log('get-category', args);
        return {
          url: 'get-category',
          method: 'GET',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            Authorization: `Bearer ${args.token}`,
          },
        };
      },
    }),
    getUserProducts: build.mutation({
      query: args => {
        console.log('get-userProducts', args);
        return {
          url: 'get-userProducts',
          method: 'GET',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            Authorization: `Bearer ${args.token}`,
          },
        };
      },
    }),

    createCategory: build.mutation({
      query: args => {
        console.log('create-category', args);
        return {
          url: 'create-category',
          method: 'POST',
          body: args,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            Authorization: `Bearer ${args.token}`,
          },
        };
      },
    }),
    createProducts: build.mutation({
      query: args => {
        console.log('create-product', args);
        return {
          url: 'create-product',
          method: 'POST',
          body: args,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            Authorization: `Bearer ${args.token}`,
          },
        };
      },
    }),
    getProducts: build.mutation({
      query: args => {
        console.log('get-products', args);
        return {
          url: 'get-products',
          method: 'POST',
          body: args,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            Authorization: `Bearer ${args.token}`,
          },
        };
      },
    }),
    getAllProducts: build.mutation({
      query: args => {
        console.log('get-Allproducts', args);
        return {
          url: 'get-Allproducts',
          method: 'POST',
          body: args,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            Authorization: `Bearer ${args.token}`,
          },
        };
      },
    }),
    sellProduct: build.mutation({
      query: args => {
        console.log('sell-products', args);
        return {
          url: 'sell-products',
          method: 'POST',
          body: args,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            Authorization: `Bearer ${args.token}`,
          },
        };
      },
    }),
  }),
});
export const {
  useLoginApiMutation,
  useSignUpApiMutation,
  useVerifyOtpApiMutation,
  useGetCategoriesMutation,
  useGetUserProductsMutation,
  useCreateCategoryMutation,
  useCreateProductsMutation,
  useGetAllProductsMutation,
  useGetProductsMutation,
} = api;
