import { Input } from "antd";
import NikoLogo from "../../assets/images/niko_logo.svg";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./Header.scss";

const { Search } = Input;

export default function Header() {
  return (
    <div className="header">
      <div className="header_logo">
        <Link to="/">
          <img src={NikoLogo} alt="Niko" title="Niko" />
        </Link>
      </div>
      <div className="header_navigation">
        <Link className="header_nav_el" to="/prodotto">
          Prodotto
        </Link>
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
      </div>
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
