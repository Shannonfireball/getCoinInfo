import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";




// createAsyncThunk simplifies our Redux app by returning an action creator that dispatches promise lifecycle actions for us so we don't have to dispatch them ourselves.
export const loadCoin = createAsyncThunk(
  "Coin/loadcoin",
  async (coin) => {

    const response = await fetch(`http://localhost:9000/coin/${coin}`);
    const farmatted = await response.json();
    return farmatted.coins.data;

  }
);

const sliceOptions = {
  name: "Coin",
  initialState: {
    coin:[],
    isLoading: false,
    hasError: false
  },
  reducers: {
  },
  extraReducers: {
    [loadCoin.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [loadCoin.fulfilled]: (state, action) => {
      state.coin = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [loadCoin.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    }
  }
}

export const CoinSlice = createSlice(sliceOptions);

export default CoinSlice.reducer;