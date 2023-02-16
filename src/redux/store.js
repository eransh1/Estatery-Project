import { configureStore } from "@reduxjs/toolkit";
import dataSliceReducer from "./dataSlice"
import sortedDataReducer from "./sortedDataSlice"


export const store = configureStore({
    reducer: {
        data: dataSliceReducer,
        sortedData:sortedDataReducer

    }

})