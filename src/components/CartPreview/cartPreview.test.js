import { cartProducts } from "utils/mockData";
import { render, screen } from "__tests__/test-utils";
import CartPreview from "./CartPreview";

describe("CartPreview", () => {
  //Use cases:
  //*Carrello vuoto: OK
  //*Carrello con prodotti: OK
  //*Rimozione elemento
  //*Vai al carrello

  test("render without products on the cart", () => {
    render(<CartPreview />);
    expect(
      screen.getByText(/nessun prodotto nel carrello/i, { exact: true })
    ).toBeInTheDocument();
  });

  test("render with products on the cart", () => {
    render(<CartPreview />, {
      preloadedState: {
        cart: {
          cartProducts: cartProducts,
        },
      },
    });
    const products = screen.getAllByTestId("product_row");
    expect(products).toHaveLength(2);
  });
});
