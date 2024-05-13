import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

let initialState = [];

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.push(payload[0]);
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { addUser, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
