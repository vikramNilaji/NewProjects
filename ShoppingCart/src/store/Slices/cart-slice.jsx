//createskuce
//initialize initial state
//slice->nam,mention initial state,actions

import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const cartSice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});
export default cartSice.reducer;
