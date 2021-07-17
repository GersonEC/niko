import { render, screen } from "./test-utils";
import Button from "../components/Button/Button";
import { ButtonType } from "../utils/models";

test("render primary button", () => {
  //Arrange
  const buttonProps = {
    type: ButtonType.Primary,
    labelText: "Aggiungere al Carrello",
  };
  render(<Button type={buttonProps.type} labelText={buttonProps.labelText} />);

  //Act

  //Assert
  screen.getByText(/aggiungere al carrello/i);
  //Verificare background nero
});

test("render wish list  button", () => {
  //Arrange
  const buttonProps = {
    type: ButtonType.Wishlist,
    labelText: "Lista desideri",
  };
  render(<Button type={buttonProps.type} labelText={buttonProps.labelText} />);

  //Act

  //Assert
  screen.getByText(/lista desideri/i);
  //Verificare background bianco
});
