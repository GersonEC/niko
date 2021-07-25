import { render, screen } from "./test-utils";
import TrendList from "../components/TrendList/TrendList";
import { productCardList } from "utils/mockData";

test("render trend list", () => {
  render(<TrendList productCardList={productCardList} />);

  const listItems = screen.getAllByRole("listitem");
  expect(listItems).toHaveLength(10);
});
