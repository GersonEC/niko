import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { fetchCount } from "../counter/counterAPI";

export interface WishListState {
  value: number;
  status: "idle" | "loading" | "failed";
}

const initialState: WishListState = {
  value: 0,
  status: "idle",
};

export const incrementAsync = createAsyncThunk(
  "wishList/fetchCart",
  async (amount: number) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);

export const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value += action.payload;
      });
  },
});

export const { increment, decrement, incrementByAmount } =
  wishListSlice.actions;

export const selectWishList = (state: RootState) => state.wishList.value;

export const incrementIfOdd =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectWishList(getState());
    if (currentValue % 2 === 1) {
      dispatch(incrementByAmount(amount));
    }
  };

export default wishListSlice.reducer;
