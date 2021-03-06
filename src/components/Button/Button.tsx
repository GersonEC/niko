/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { ButtonType } from "../../utils/models";
import { AiOutlineHeart } from "react-icons/ai";
import PaypalImage from "assets/images/paypal.svg";

type ButtonNikoProps = {
  type: string;
};

const ButtonNiko = styled.div<ButtonNikoProps>(
  {
    display: "flex",
    justifyContent: "center",
    border: "0",
    width: "17rem",
    borderRadius: "5rem",
    backgroundColor: "black",
    fontSize: "16px",
    fontFamily: "Avenir",
    ":hover": {
      cursor: "pointer",
      opacity: 0.8,
    },
  },
  (props: ButtonNikoProps) => ({
    backgroundColor:
      props.type === ButtonType.Primary
        ? "black"
        : props.type === ButtonType.Wishlist
        ? "white"
        : "gainsboro",
    border:
      props.type === ButtonType.Wishlist || props.type === ButtonType.Paypal
        ? "1px solid gainsboro"
        : "",
    color: props.type === ButtonType.Primary ? "white" : "black",
  })
);

interface ButtonProps {
  type: ButtonType;
  labelText: string;
  onClick: () => void;
  disabled?: boolean;
}
export default function Button(props: ButtonProps) {
  return (
    <div>
      <ButtonNiko
        data-testid="niko-button"
        type={props.type}
        onClick={props.onClick}
      >
        <div>
          <p
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {props.labelText}{" "}
            {props.type === ButtonType.Wishlist && <AiOutlineHeart />}
            {props.type === ButtonType.Paypal && (
              <img
                style={{ marginTop: "0.5rem" }}
                src={PaypalImage}
                alt="paypal"
                title="Paypal"
              />
            )}
          </p>
        </div>
      </ButtonNiko>
    </div>
  );
}
