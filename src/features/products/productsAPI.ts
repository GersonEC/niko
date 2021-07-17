import { Product } from "utils/models";

// A mock function to mimic making an async request for data
export function fetchProducts() {
  return new Promise<Product[]>((resolve) =>
    //setTimeout(() => resolve({ data: amount }), 500)
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => resolve(data))
  );
}
