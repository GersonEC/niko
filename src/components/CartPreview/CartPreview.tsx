import { RootState } from "app/store";
import Button from "components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { ButtonType, Product } from "utils/models";
import { Link } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";
import { removeProductFromCart } from "features/cart/cartSlice";
import { message } from "antd";
import "./CartPreview.scss";

const key = "updatable";

export default function CartPreview() {
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
    <div className="cart_preview">
      {cartProducts.length > 0 ? (
        <>
          {cartProducts.map((item: Product) => {
            return (
              <div
                data-testid="product_row"
                className="cart_preview_row"
                key={item.id}
              >
                <img src={item.image} width={30} alt={item.title} />
                <span className="cart_preview_row_title" title={item.title}>
                  {item.title}
                </span>
                <span style={{ fontSize: "12px" }}>
                  <b>{item.price} €</b>
                </span>
                <div className="cart_preview_row_trash">
                  <BsFillTrashFill
                    style={{ fontSize: "12px" }}
                    onClick={() => onRemoveClick(item.id)}
                  />
                </div>
              </div>
            );
          })}
          <div style={{ padding: "1rem" }}>
            <Link to={"/carrello"}>
              <Button
                type={ButtonType.Primary}
                labelText={"Vai al carrello"}
                onClick={() => {}}
              />
            </Link>
          </div>
        </>
      ) : (
        <h3 className="cart_preview_no_products">
          Nessun prodotto nel carrello.
        </h3>
      )}
    </div>
  );
}
