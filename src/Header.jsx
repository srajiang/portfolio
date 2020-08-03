import React from 'react';
import { B as Button, L as Link } from './Base.styled';
import { NavLink, NavBar } from './Header.styled';
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <NavBar>
      <NavLink>
        <Link className="anchor">
          <FA icon="adjust" />
        </Link>
        <Link className="anchor">
          <span>01 / </span>About
        </Link>
        <Link className="anchor">
          <span>02 / </span>Projects
        </Link>
        <Link className="anchor">
          <span>03 / </span>Contact
        </Link>
        <Button className="">Resume</Button>
      </NavLink>
    </NavBar>
  );
}

export default Header;