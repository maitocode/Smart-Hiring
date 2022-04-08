import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "core/services/httpService";
import STATUS from "./constants";

export const getPositonOfProfile = createAsyncThunk(
  "positions/getPositonOfProfile",
  async (endPoint) => {
    const res = await http.get(`/persona/position/profile/${endPoint}`);
    return res.data;
  }
);

export const positionSlice = createSlice({
  name: "positions",
  initialState: {
    data: null,
    status: STATUS.IDLE,
    error: null
  },
  reducers: {
    doSomething: (state, actions) => {
      console.log(actions.payload);
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getPositonOfProfile.pending, (state) => {
        state.status = STATUS.LOADING;
      })
      .addCase(getPositonOfProfile.fulfilled, (state, action) => {
        state.status = STATUS.SUCCEEDED;
        state.data = action.payload;
      })
      .addCase(getPositonOfProfile.rejected, (state, action) => {
        state.status = STATUS.FAILED;
        state.error = action.error.message;
      });
  }
});

export const { doSomething } = positionSlice.actions;

export default positionSlice.reducer;

export const selectPostions = (state) => state.positions.data;

export const selectPositionsStatus = (state) => state.positions.status;

export const selectPositionsError = (state) => state.positions.error;
