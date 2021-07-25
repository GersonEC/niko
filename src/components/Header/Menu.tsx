import { Link } from "react-router-dom";
import "./Header.scss";

export default function Menu() {
  return (
    <div className="header_navigation">
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
  );
}
