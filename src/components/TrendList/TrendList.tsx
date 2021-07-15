import ProductCard from "components/ProductCard/ProductCard";
import { ProductCard as ProductCardType } from "../../utils/models";
import "./TrendList.scss";

interface TrendListProps {
  productCardList: ProductCardType[];
}

export default function TrendList(props: TrendListProps) {
  return (
    <div>
      <p className="trenList_title">Principali Tendenze</p>
      <div className="trendList">
        {props.productCardList &&
          props.productCardList.map((item) => {
            return (
              <div role={"listitem"} key={item.name}>
                <ProductCard
                  name={item.name}
                  description={item.description}
                  price={item.price}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

//Renderizza una lista di ProducCards!
