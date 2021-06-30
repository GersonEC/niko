import axios from "axios";
import * as React from "react";
import { Product } from "utils/models";
import "./Home.scss";

//IMPLEMENTARE LOADER
//IMPLEMENTARE INFINITE SCROLLING

interface HomeState {
  products: Product[];
  loading: boolean;
  page: number;
  prevY: number;
}

export default function Home() {
  const [state, setState] = React.useState<HomeState>({
    products: [],
    loading: false,
    page: 0,
    prevY: 0,
  });

  const { products, loading } = state;

  React.useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      loading: true,
    }));
    axios.get(`https://fakestoreapi.com/products`).then((res) => {
      const newProducts = res.data;
      console.log(newProducts);
      setState((prevState) => ({
        ...prevState,
        loading: false,
        products: newProducts,
      }));
    });
  }, []);

  if (loading) {
    return <h1>Caricamento prodotti in corso...</h1>;
  }
  return (
    <div className="product_container">
      {products.map((item) => {
        return (
          <div className="product" key={item.id}>
            <img src={item.image} width={200} alt={item.title} />
          </div>
        );
      })}
    </div>
  );
}
