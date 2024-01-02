import {createSlice} from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {},
  reducers: {
    saveProductData: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const {saveProductData} = productSlice.actions;
export default productSlice.reducer;
