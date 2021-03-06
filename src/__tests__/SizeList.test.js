import { render, screen } from "./test-utils";
import SizeList from "../components/SizeList/SizeList";
import { sizeListData } from "../utils/mockData";

test("render list of sizes ", () => {
  render(<SizeList data={sizeListData} />);

  const listItems = screen.getAllByRole("listitem");
  expect(listItems).toHaveLength(15);
});
