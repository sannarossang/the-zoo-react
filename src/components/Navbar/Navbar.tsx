import { Link } from "react-router-dom";
import "../../scss/_Navbar.scss";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Hem</Link>
        </li>
        <li>
          <Link to="/animals">Djuren</Link>
        </li>
      </ul>
    </nav>
  );
};
