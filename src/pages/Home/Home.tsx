import axios from "axios";
import * as React from "react";
import { Product } from "utils/models";
import { Spin } from "antd";
import { Link } from "react-router-dom";
import { message } from "antd";
import "./Home.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "app/store";
import { fetchProductsAsync } from "features/products/productsSlice";

export default function Home() {
  const dispatch = useDispatch();
  const productList = useSelector(
    (state: RootState) => state.products.productList
  );
  const status = useSelector((state: RootState) => state.products.status);

  React.useEffect(() => {
    dispatch(fetchProductsAsync());
  }, []);

  if (status === "loading") {
    return (
      <div className="spin_container">
        <Spin size="large" />
      </div>
    );
  }
  return (
    <div className="product_container">
      {productList &&
        productList.map((item) => {
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
