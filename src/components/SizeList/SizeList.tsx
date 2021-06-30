/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { Size } from "../../utils/models";
import "./SizeList.scss";

type SizeElementProps = {
  available: boolean;
};

const SizeElement = styled.div<SizeElementProps>(
  {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid rgba(117, 117, 117, 0.2)",
  },
  (props: SizeElementProps) => ({
    backgroundColor: props.available ? "white" : "gainsboro",
  })
);

const SizeElementText = styled.div<SizeElementProps>(
  {
    fontFamily: "Avenir",
    color: "black",
    fontSize: "16px",
  },
  (props: SizeElementProps) => ({
    color: props.available ? "black" : "gray",
  })
);

interface SizeListProps {
  data: Size[];
}

export default function SizeList(props: SizeListProps) {
  const renderSize = (size: Size): JSX.Element => {
    return (
      <SizeElement
        key={size.size}
        role={"listitem"}
        className={"size_element"}
        available={size.available}
      >
        <SizeElementText available={size.available}>
          CM {size.size}
        </SizeElementText>
      </SizeElement>
    );
  };

  return (
    <div className={"size_list"}>
      {props.data.map((el: Size) => renderSize(el))}
    </div>
  );
}
