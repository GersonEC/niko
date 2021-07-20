/** @jsxImportSource @emotion/react */
import * as React from "react";
import { Input, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import NikoLogo from "../../assets/images/niko_logo.svg";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import useWindowSize from "hooks/useWindowSize";
import "antd/dist/antd.css";
import "./Header.scss";
import { useSelector } from "react-redux";
import { selectWishList } from "features/wishList/wishListSlice";
import { RootState } from "app/store";
import CartPreview from "components/CartPreview/CartPreview";

const { Search } = Input;

export default function Header() {
  const cartQuantity = useSelector(
    (state: RootState) => state.cart.cartProducts.length
  );
  const wishList = useSelector(selectWishList);
  const isMobile = useWindowSize();
  const [isDrawerVisible, setIsDrawerVisible] = React.useState(false);
  const [isCartPreviewVisible, setIsCartPreviewVisible] = React.useState(false);

  const renderMenuNavigation = () => {
    return (
      <>
        <Link className="header_nav_el" to="/nuove-tendenze">
          Nuove tendenze
        </Link>
        <Link className="header_nav_el" to="/regali">
          Regali
        </Link>
        <Link className="header_nav_el" to="/uomo">
          Uomo
        </Link>
        <Link className="header_nav_el" to="/donna">
          Donna
        </Link>
        <Link className="header_nav_el" to="/bambino">
          Bambino
        </Link>
        <Link className="header_nav_el" to="/sconti">
          Sconti
        </Link>
      </>
    );
  };

  return (
    <div className="header">
      <div className="header_logo">
        <Link to="/">
          <img src={NikoLogo} alt="Niko" title="Niko" />
        </Link>
      </div>
      {isMobile.width < 1200 ? (
        <div className="header_navigation">
          <MenuOutlined onClick={() => setIsDrawerVisible(true)} />
          <Drawer
            title="Menu"
            placement={"left"}
            closable={true}
            onClose={() => setIsDrawerVisible(false)}
            visible={isDrawerVisible}
            key={"left"}
          >
            {renderMenuNavigation()}
          </Drawer>
        </div>
      ) : (
        <div className="header_navigation">{renderMenuNavigation()}</div>
      )}

      <div className="header_shopping">
        <Search
          placeholder="cercare..."
          allowClear
          onSearch={() => {}}
          style={{ width: 200 }}
        />
        <div className="header_wishList">
          <div className="cart_quantity_products">
            <span className="cart_quantity_text">{wishList}</span>
          </div>
          <AiOutlineHeart title="Lista desideri" />
        </div>
        <div
          className="header_cart"
          onClick={() => setIsCartPreviewVisible(!isCartPreviewVisible)}
        >
          <div className="cart_quantity_products">
            <span
              data-testid="cart_quantity_text"
              className="cart_quantity_text"
            >
              {cartQuantity}
            </span>
          </div>
          <AiOutlineShoppingCart title="Carrello" />
        </div>
        {isCartPreviewVisible && <CartPreview />}
      </div>
    </div>
  );
}
