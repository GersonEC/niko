import * as React from "react";
import { RootState } from "app/store";
import { useSelector } from "react-redux";
import Button from "../Button/Button";
import "./CartReview.scss";
import { ButtonType } from "utils/models";

export default function CartReview() {
  const cartProducts = useSelector(
    (state: RootState) => state.cart.cartProducts
  );
  const [total, setTotal] = React.useState<number>(0);

  React.useEffect(() => {
    if (cartProducts.length > 0) {
      const totalPrice = cartProducts.map((item) => item.price);
      setTotal(totalPrice.reduce((acc, currentValue) => acc + currentValue));
    }
  }, [cartProducts]);

  return (
    <div className={"cart_review"}>
      <h1 style={{ fontFamily: "Avenir" }}>Review</h1>
      <div className={"cart_review_row"}>
        <p>Totale carrello</p>
        <p>
          <b>{total} €</b>
        </p>
      </div>
      <div className={"cart_review_row"}>
        <p>Costi di spedizione</p>
        <p>
          <b>0.0 €</b>
        </p>
      </div>
      <div
        className={"cart_review_row"}
        style={{
          marginTop: "1rem",
          paddingTop: "1rem",
          borderTop: "1px solid gray",
          borderBottom: "1px solid gray",
        }}
      >
        <p style={{ fontSize: "18px" }}>
          <b>Totale</b>
        </p>
        <p style={{ fontSize: "18px" }}>
          <b>{total}€</b>
        </p>
      </div>
      <div className="cart_review_buttons">
        <Button
          type={ButtonType.Primary}
          labelText={"Acquista come visitatore"}
          onClick={() => {}}
        />
        <Button
          type={ButtonType.Primary}
          labelText={"Acquista come membro"}
          onClick={() => {}}
        />
        <Button
          type={ButtonType.Wishlist}
          labelText={"Paypal"}
          onClick={() => {}}
        />
      </div>
    </div>
  );
}
