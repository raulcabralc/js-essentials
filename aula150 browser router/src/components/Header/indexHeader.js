import React from "react";
import { FaHome, FaSignInAlt, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import { Nav } from "./styledHeader";

export default function Header() {
  return (
    <>
      <Nav>
        <Link to="/">
          <FaHome size={24} />
        </Link>
        <Link to="/login">
          <FaUserAlt size={22} />
        </Link>
        <Link to="/logoff">
          <FaSignInAlt size={24} />
        </Link>
      </Nav>
    </>
  );
}
