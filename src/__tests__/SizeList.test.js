import { render, screen } from "./test-utils.jsx";
import SizeList from "../components/SizeList/SizeList";
import { sizeListData } from "../utils/data";

test("render list of sizes ", () => {
  render(<SizeList data={sizeListData} />);

  const listItems = screen.getAllByRole("listitem");
  expect(listItems).toHaveLength(15);
});
