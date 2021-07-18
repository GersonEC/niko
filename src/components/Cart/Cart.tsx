import { RootState } from "app/store";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "utils/models";
import CartReview from "./CartReview";
import { BsFillTrashFill } from "react-icons/bs";
import { removeProductFromCart } from "features/cart/cartSlice";
import "./Cart.scss";
import { message } from "antd";

const key = "updatable";

export default function Cart() {
  const dispatch = useDispatch();
  const cartProducts = useSelector(
    (state: RootState) => state.cart.cartProducts
  );

  const onRemoveClick = (id: number) => {
    message.loading({ content: "Loading...", key });
    setTimeout(() => {
      dispatch(removeProductFromCart(id));
      message.success({
        content: "Prodotto rimosso correttamente dal carrello.",
        key,
        duration: 2,
      });
    }, 1000);
  };

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
                <div style={{ display: "flex", gap: "2rem" }}>
                  <p>
                    <b>{item.price} €</b>
                  </p>
                  <div className="cart_products_row_trash">
                    <BsFillTrashFill onClick={() => onRemoveClick(item.id)} />
                  </div>
                </div>
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
