import { render, screen, within } from "@testing-library/react";
import SizeList from "../components/SizeList/SizeList";
import { sizeListData } from "../utils/data";

test("render list of sizes ", () => {
  render(<SizeList data={sizeListData} />);

  const listItems = screen.getAllByRole("listitem");
  expect(listItems).toHaveLength(15);

  // I use a `forEach` to make the test dynamic in case we decide
  // to generate items dynamically in the future
  // This method is also implicitly testing the order
  /*listItems.forEach((item, index) => {
      const { getByText, queryByText } = within(item)
      const { name, isAvailable } = sizeListData[index]
      expect(getByText(name)).toBeInTheDocument()
      isAvailable
        ? expect(getByText('Available!')).toBeInTheDocument()
        : expect(queryByText('Available!')).not.toBeInTheDocument()
    });*/
});

/*test("verify background color based on availability", () => {
  render(<SizeList data={sizeListData} />);
  const listItems = screen.getAllByRole("listitem");
  sizeListData.forEach((item) => {
    console.log(item);
    if (item.available) {
      expect(item).toHaveStyle(`background-color: white`);
    } else {
      expect(item).toHaveStyle(`background-color: gainsboro`);
    }
  });
});*/
