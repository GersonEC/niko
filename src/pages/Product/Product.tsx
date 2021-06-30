import Button from "components/Button/Button";
import { ButtonType } from "../../utils/models";
import { sizeListData, productCardList } from "utils/data";
import SizeList from "components/SizeList/SizeList";
import ProductDetail from "components/ProductDetail/ProductDetail";
import TrendList from "components/TrendList/TrendList";
import PreviewImages from "components/PreviewImages/PreviewImages";

export default function Product() {
  return (
    <div>
      <h2>Product page</h2>
      <Button type={ButtonType.Primary} labelText={"Aggiungere al Carrello"} />
      <Button type={ButtonType.Secondary} labelText={"Lista desideri"} />
      <SizeList data={sizeListData} />
      <ProductDetail />
      <TrendList productCardList={productCardList} />
      <PreviewImages />
    </div>
  );
}
