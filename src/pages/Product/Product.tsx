import * as React from "react";
import Button from "components/Button/Button";
import { ButtonType } from "../../utils/models";
import { sizeListData, productCardList } from "utils/data";
import SizeList from "components/SizeList/SizeList";
import ProductDetail from "components/ProductDetail/ProductDetail";
import TrendList from "components/TrendList/TrendList";
import PreviewImages from "components/PreviewImages/PreviewImages";
import ProductDetailPreview from "components/ProductDetail/ProductDetailPreview";
import "./Product.scss";
import { useDispatch } from "react-redux";
import { increment as incrementCart } from "features/cart/cartSlice";
import { increment as incrementWishList } from "features/wishList/wishListSlice";
import { message } from "antd";

const key = "updatable";

export default function Product() {
  const dispatch = useDispatch();

  const onAddCartClick = () => {
    message.loading({ content: "Loading...", key });
    setTimeout(() => {
      dispatch(incrementCart());
      message.success({
        content: "Prodotto aggiunto correttamente nel carrello.",
        key,
        duration: 2,
      });
    }, 1000);
  };

  const onAddWishListClick = () => {
    message.loading({ content: "Loading...", key });
    setTimeout(() => {
      dispatch(incrementWishList());
      message.success({
        content: "Prodotto aggiunto correttamente nella lista desideri.",
        key,
        duration: 2,
      });
    }, 1000);
  };

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
            onClick={onAddCartClick}
          />
          <Button
            type={ButtonType.Secondary}
            labelText={"Lista desideri"}
            onClick={onAddWishListClick}
          />
          <ProductDetail />
        </div>
      </div>
      <div className="trend_list_container">
        <TrendList productCardList={productCardList} />
      </div>
    </div>
  );
}
