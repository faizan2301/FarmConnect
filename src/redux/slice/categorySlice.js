import {createSlice} from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',
  initialState: {},
  reducers: {
    saveCategoryData: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const {saveCategoryData} = categorySlice.actions;
export default categorySlice.reducer;
