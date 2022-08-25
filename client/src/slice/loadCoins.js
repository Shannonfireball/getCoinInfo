import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";




// createAsyncThunk simplifies our Redux app by returning an action creator that dispatches promise lifecycle actions for us so we don't have to dispatch them ourselves.
export const loadCoins = createAsyncThunk(
  "allCoins/loadcoins",
  async () => {

    const response = await fetch('http://localhost:9000/coins');
    const farmatted = await response.json();
    return farmatted.coins.data;

  }
);

const sliceOptions = {
  name: "allCoins",
  initialState: {
    coins:[],
    isLoading: false,
    hasError: false
  },
  reducers: {
    AddWORD:(state,action)=>{
      state.coins.push(action.payload)
    }
  },
  extraReducers: {
    [loadCoins.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [loadCoins.fulfilled]: (state, action) => {
      state.coins = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [loadCoins.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    }
  }
}

export const allCoinsSlice = createSlice(sliceOptions);

export const { AddWORD } = allCoinsSlice.actions

export const selectallCoins = (state) => state.allCoins.coins;

export default allCoinsSlice.reducer;