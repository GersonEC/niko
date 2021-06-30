import { render, screen } from "@testing-library/react";
import TrendList from "../components/TrendList/TrendList";
import { productCardList } from "utils/data";

test("render trend list", () => {
  render(<TrendList productCardList={productCardList} />);

  const listItems = screen.getAllByRole("listitem");
  expect(listItems).toHaveLength(10);
});
