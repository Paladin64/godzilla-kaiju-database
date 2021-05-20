import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link className="nav-link" to="/">
        Home
      </Link>
      {" | "}
      <Link className="nav-link" to="/godzilla-list">
        Godzilla
      </Link>
      {" | "}
      <Link className="nav-link" to="/godzilla-clone-list">
        Godzilla Clone
      </Link>
      {" | "}
      <Link className="nav-link" to="/mechagodzilla-list">
        Mechagodzilla
      </Link>
      {" | "}
      <Link className="nav-link" to="/ghidorah-list">
        Ghidorah
      </Link>
      {" | "}
      <Link className="nav-link" to="/gigan-list">
        Gigan
      </Link>
      {" | "}
      <Link className="nav-link" to="/mothra-list">
        Mothra
      </Link>
    </nav>
  );
};

export default Nav;
