import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  // State to control the collapse of the navbar
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the collapse state
  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
          🐱 iMmIgRaNtS aRe EaTiNg OuR pEtS! 🐶
        </Link>

        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link text-white"
                to="/"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white"
                to="/about"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
