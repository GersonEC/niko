import LittleShoeImage1 from "../../assets/images/scarpe_preview_piccole.svg";
import LittleShoeImage2 from "../../assets/images/scarpe_preview_piccole2.svg";
import "./ProductDetail.scss";

interface ProductDetailPreviewProps {
  description: string;
  name: string;
  price: number;
  images?: string[];
}
export default function ProductDetailPreview(props: ProductDetailPreviewProps) {
  return (
    <div className="product-detail-preview">
      <p className="product-detail-preview_description">{props.description}</p>
      <div className="product-detail-preview_info">
        <p className="product-detail-preview_name">{props.name}</p>
        <p className="product-detail-preview_price">€ {props.price}</p>
      </div>
      <div className="product-detail-preview_images">
        <img src={LittleShoeImage2} alt="bianche" />
        <img src={LittleShoeImage1} alt="griggie" />
      </div>
    </div>
  );
}
