import Header from "../components/Header/Header";
import { render, screen } from "./test-utils";

test("Header render wish list and cart", () => {
  render(<Header />);
  screen.getByTitle(/lista desideri/i);
  screen.getByTitle(/carrello/i);
});
