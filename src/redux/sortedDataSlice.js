import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const sortedDataSlice = createSlice({
  name: "sortedDataSlice",
  initialState,
  reducers: {
    addSorted: (state, action) => {
      return [...action.payload];
    },
    filterSorted: (state, action) => {
      return state.filter((item)=>item!==action.payload)
    },
    
  },
});

export const { addSorted, filterSorted } = sortedDataSlice.actions;
export default sortedDataSlice.reducer;
