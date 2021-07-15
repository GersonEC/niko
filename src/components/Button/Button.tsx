/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { ButtonType } from "../../utils/models";
import { AiOutlineHeart } from "react-icons/ai";

type ButtonNikoProps = {
  type: string;
};

const ButtonNiko = styled.div<ButtonNikoProps>(
  {
    display: "flex",
    justifyContent: "center",
    border: "0",
    width: "22rem",
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
    backgroundColor: props.type === ButtonType.Primary ? "black" : "white",
    border: props.type === ButtonType.Secondary ? "1px solid gainsboro" : "",
    color: props.type === ButtonType.Primary ? "white" : "black",
  })
);

interface ButtonProps {
  type: ButtonType;
  labelText: string;
  onClick: () => void;
}
export default function Button(props: ButtonProps) {
  return (
    <div>
      <ButtonNiko type={props.type} onClick={props.onClick}>
        <div>
          <p
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {props.labelText}{" "}
            {props.type === ButtonType.Secondary && <AiOutlineHeart />}
          </p>
        </div>
      </ButtonNiko>
    </div>
  );
}
