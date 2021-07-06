import Button from "components/Button/Button";
import { ButtonType } from "../../utils/models";
import { sizeListData, productCardList } from "utils/data";
import SizeList from "components/SizeList/SizeList";
import ProductDetail from "components/ProductDetail/ProductDetail";
import TrendList from "components/TrendList/TrendList";
import PreviewImages from "components/PreviewImages/PreviewImages";
import ProductDetailPreview from "components/ProductDetail/ProductDetailPreview";
import "./Product.scss";

export default function Product() {
  return (
    <div className="product_page_container">
      <div className="product_info">
        <div className="previewImages_container">
          <PreviewImages />
        </div>
        <div className="product_info_details">
          <ProductDetailPreview
            description="Scarpe per uomo"
            name="Nike Air Force 1 '07"
            price={1999}
          />
          <SizeList data={sizeListData} />
          <Button
            type={ButtonType.Primary}
            labelText={"Aggiungere al Carrello"}
          />
          <Button type={ButtonType.Secondary} labelText={"Lista desideri"} />
          <ProductDetail />
        </div>
      </div>
      <div className="trend_list_container">
        <TrendList productCardList={productCardList} />
      </div>
    </div>
  );
}
