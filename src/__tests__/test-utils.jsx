// test-utils.jsx
import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// Import your own reducer
import cartReducer from "../features/cart/cartSlice";
import wishListReducer from "../features/wishList/wishListSlice";
import { Router, Route } from "react-router-dom";
import { createMemoryHistory } from "history";

function render(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: { cart: cartReducer, wishList: wishListReducer },
      preloadedState,
    }),
    path = "/",
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),

    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path={path}>{children}</Route>
        </Router>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
