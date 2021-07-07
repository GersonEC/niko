import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import wishListReducer from "../features/wishList/wishListSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishList: wishListReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
