import Header from "./Header";
import Menu from "./Menu";
import { render, screen } from "../../__tests__/test-utils";
import userEvent from "@testing-library/user-event";

describe("Testing Header component", () => {
  test("Menu render routes", () => {
    render(<Menu />);
    screen.getByText(/nuove tendenze/i);
    screen.getByText(/uomo/i);
    screen.getByText(/donna/i);
    screen.getByText(/bambino/i);
    screen.getByText(/sconti/i);
    screen.getByText(/regali/i);

    /*screen.getByTitle(/lista desideri/i);
    screen.getByTitle(/carrello/i);*/
  });
});
