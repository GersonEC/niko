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

const { Search } = Input;

export default function Header() {
  const isMobile = useWindowSize();
  const [isDrawerVisible, setIsDrawerVisible] = React.useState(false);
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
        <AiOutlineHeart className="header_wishList" title="Lista desideri" />
        <AiOutlineShoppingCart className="header_cart" title="Carrello" />
      </div>
    </div>
  );
}
