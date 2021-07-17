import { RootState } from "app/store";
import { useSelector } from "react-redux";
import { Product } from "utils/models";
import CartReview from "./CartReview";
import "./Cart.scss";

export default function Cart() {
  const cartProducts = useSelector(
    (state: RootState) => state.cart.cartProducts
  );

  return (
    <div className={"cart"}>
      <div>
        <p className={"cart_title"}>Prodotti del Carrello</p>
        {cartProducts &&
          cartProducts.map((item: Product) => {
            return (
              <div className={"cart_products_row"} key={item.id}>
                <div className={"cart_products_row_img"}>
                  <img src={item.image} width={60} alt={item.title} />
                </div>
                <div className={"cart_products_row_info"}>
                  <p>
                    <i>{item.category}</i>
                  </p>
                  <p>{item.title}</p>
                </div>
                <p>
                  <b>{item.price} €</b>
                </p>
              </div>
            );
          })}
      </div>
      <div>
        <CartReview />
      </div>
    </div>
  );
}
