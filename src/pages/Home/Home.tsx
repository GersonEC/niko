import axios from "axios";
import * as React from "react";
import { Product } from "utils/models";
import { Spin } from "antd";
import { Link } from "react-router-dom";
import { message } from "antd";
import "./Home.scss";

interface HomeState {
  products: Product[];
  loading: boolean;
  page: number;
  prevY: number;
}
const key = "updatable";

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
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        const newProducts = res.data;
        setState((prevState) => ({
          ...prevState,
          loading: false,
          products: newProducts,
        }));
      })
      .catch((error) => {
        console.log("Errore: ", error);
        message.error({
          content: `${error.message}`,
          key,
          duration: 2,
        });
      });
  }, []);

  if (loading) {
    return (
      <div className="spin_container">
        <Spin size="large" />
      </div>
    );
  }
  return (
    <div className="product_container">
      {products.map((item) => {
        return (
          <div className="product" key={item.id}>
            <Link
              to={{
                pathname: `/prodotto/${item.id}`,
                state: {
                  id: item.id,
                },
              }}
            >
              <img src={item.image} width={200} alt={item.title} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
