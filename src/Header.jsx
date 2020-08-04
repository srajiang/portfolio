import React from 'react';
import { B as Button, L as Link } from './Base.styled';
import { NavLink, NavBar, NavHamburgerMenu, Menu } from './Margin.styled';

/* 
  TODO: 
  Add Nav href anchors + resume links
  Add responsive styling 
  Add logo? 
  Add scroll box-shadow animation
*/

const Header = () => {
  return (
    <>
      <NavHamburgerMenu>
        { ["one", "two", "three"].map(
          (tag, i) => <div className={`hamburger-box ${tag}`} key={i}><Menu /></div>
        ) }
      </NavHamburgerMenu>
      <NavBar>
        <NavLink>
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
    </>
  );
}

export default Header;