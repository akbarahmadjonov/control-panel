import NavbarData from "./NavbarData";
import "./Header.scss";
import logo from "../../assets/images/logo.svg";
// import Tickets from "../../Components/pages/Tickets";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="site_header">
      <div className="site_header_wrapper ">
        <a className="header_link ms-5 " href="./index.html">
          <img src={logo} alt="header_logo" />
        </a>
        <nav className="nav mt-5 pt-4  ">
          <ul className="nav__list">
            {NavbarData.map((item, index) => (
              <li
                key={index}
                className="list-unstyled mb-3 list-up d-flex pt-4"
              >
                <Link to="/" className="navbar_link ">
                  <img
                    className="navbar_img mx-3 "
                    alt="navbar_logo"
                    src={item.icon}
                  />
                </Link>
                <Link to="/tickets" className="nav-span">
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
