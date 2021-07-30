import { render, screen } from "../../__tests__/test-utils";
import Button from "./Button";
import { ButtonType } from "../../utils/models";
import userEvent from "@testing-library/user-event";

describe("Button", () => {
  test("render primary button", () => {
    const buttonProps = {
      type: ButtonType.Primary,
      labelText: "Aggiungere al Carrello",
    };
    render(
      <Button type={buttonProps.type} labelText={buttonProps.labelText} />
    );
    screen.getByText(/aggiungere al carrello/i);
  });

  test("render wish list  button", () => {
    const buttonProps = {
      type: ButtonType.Wishlist,
      labelText: "Lista desideri",
    };
    render(
      <Button type={buttonProps.type} labelText={buttonProps.labelText} />
    );
    screen.getByText(/lista desideri/i);
  });

  test("render paypal  button", () => {
    const buttonProps = {
      type: ButtonType.Paypal,
      labelText: "",
    };
    render(
      <Button type={buttonProps.type} labelText={buttonProps.labelText} />
    );
    screen.getByRole("img");
  });

  test("call a callback function when click on the button", () => {
    const mockCallback = jest.fn();
    const buttonProps = {
      type: ButtonType.Paypal,
      labelText: "",
      onClick: mockCallback,
    };
    render(
      <Button
        type={buttonProps.type}
        labelText={buttonProps.labelText}
        onClick={buttonProps.onClick}
      />
    );
    const button = screen.getByTestId("niko-button");
    userEvent.click(button);
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });
});
