import { RootState } from "app/store";
import Button from "components/Button/Button";
import history from "../../history.js";
import { useSelector } from "react-redux";
import { ButtonType, Product } from "utils/models";
import "./CartPreview.scss";
import { Link } from "react-router-dom";

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
              <img src={item.image} width={30} />
              <span className="cart_preview_row_title" title={item.title}>
                {item.title}
              </span>
              <span style={{ fontSize: "12px" }}>
                <b>{item.price} €</b>
              </span>
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
    </div>
  );
}
