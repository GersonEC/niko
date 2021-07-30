import { cartProducts } from "utils/mockData";
import { render, screen } from "__tests__/test-utils";
import Cart from "./Cart";

describe("Testing Cart component", () => {
  test("render products items on cart", () => {
    render(<Cart />, {
      preloadedState: {
        cart: {
          cartProducts: cartProducts,
        },
      },
    });
    const products = screen.getAllByTestId("cart-product");
    expect(products).toHaveLength(2);
  });
});
