import { render, screen } from "./test-utils.jsx";
import ProductCard from "../components/ProductCard/ProductCard";

test("Render product card component", () => {
  const productCardProps = {
    name: "Nike Air Force 1 High '07",
    description: "scarpe per uomo",
    price: 259,
  };
  render(
    <ProductCard
      name={productCardProps.name}
      description={productCardProps.description}
      price={productCardProps.price}
    />
  );

  screen.getByText(productCardProps.name);
  screen.getByText(productCardProps.description);
  screen.getByText(/259/);
});
