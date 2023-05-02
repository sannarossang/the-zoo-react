import { Link } from "react-router-dom";
import "../Navbar/Navbar.scss";

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
