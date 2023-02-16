import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const dataSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    add: (state, action) => {
      return [...action.payload];
    },
    filter: (state, action) => {
      return state.filter((item)=>item!==action.payload)
    },
    
  },
});

export const { add, filter } = dataSlice.actions;
export default dataSlice.reducer;
