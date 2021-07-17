import { RootState } from "app/store";
import { useSelector } from "react-redux";
import { Product } from "utils/models";
import "./CartPreview.scss";

export default function CartPreview() {
  const cartProducts = useSelector(
    (state: RootState) => state.cart.cartProducts
  );

  return (
    <div className="cart_preview">
      {cartProducts &&
        cartProducts.map((item: Product) => {
          return (
            <div className="cart_preview_row" key={item.id}>
              <span>{item.id}</span>
              <img src={item.image} width={50} />
            </div>
          );
        })}
    </div>
  );
}
