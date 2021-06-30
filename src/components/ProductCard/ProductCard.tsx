import "./ProductCard.scss";
import ShoeImage from "../../assets/images/scarpe.svg";
import { ProductCard as ProductCardProps } from "utils/models";

export default function ProductCard(props: ProductCardProps) {
  return (
    <div className="productCard">
      <img src={ShoeImage} alt={props.name} />
      <p className="productCard_name">{props.name}</p>
      <p className="productCard_description">{props.description}</p>
      <p className="productCard_price">{props.price} €</p>
    </div>
  );
}
