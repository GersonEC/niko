import userEvent from "@testing-library/user-event";
import { cartProducts, cartProduct } from "utils/mockData";
import { render, screen } from "__tests__/test-utils";
import { waitForElement } from "@testing-library/react";
import CartPreview from "./CartPreview";
import { Redirect as MockRedirect } from "react-router";

describe("CartPreview", () => {
  //Use cases:
  //*Carrello vuoto: OK
  //*Carrello con prodotti: OK
  //*Rimozione elemento: OK
  //*Vai al carrello: KO

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
    expect(
      screen.getByText(/vai al carrello/i, { exact: true })
    ).toBeInTheDocument();
  });

  test("remove a product when user click on trash icon", async () => {
    render(<CartPreview />, {
      preloadedState: {
        cart: {
          cartProducts: cartProduct,
        },
      },
    });
    const trashIcon = screen.getByTitle(/rimuovere elemento/i);
    userEvent.click(trashIcon);
    const textOnCartPreview = await waitForElement(() =>
      screen.getByText(/nessun prodotto nel carrello/i)
    );
    expect(textOnCartPreview).toBeInTheDocument();
  });

  /*test.only("go to cart page when click on 'vai al carrello' button ", async () => {
    render(<CartPreview />, {
      preloadedState: {
        cart: {
          cartProducts: cartProduct,
        },
      },
    });
    const button = screen.getByText(/vai al carrello/i);
    userEvent.dblClick(screen.getByText(/vai al carrello/i));
    screen.debug();
    //screen.getByText(/prodotti nel carrello/i);
    //expect(MockRedirect).toHaveBeenCalledWith({ to: "/" }, {});
  });*/
});
