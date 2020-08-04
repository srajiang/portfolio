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

  const navLinks = [{tag: "About", url: ""}, 
                    {tag: "Projects", url: ""}, 
                    {tag: "Contact", url: ""},
                  ];

  return (
    <>
      <NavHamburgerMenu>
        { ["one", "two", "three"].map(
          (tag, i) => <div className={`hamburger-box ${tag}`} key={i}><Menu /></div>
        ) }
      </NavHamburgerMenu>
      <NavBar>
        <NavLink>
          {navLinks.map(
            (link, i) => <Link className="anchor">
              <span>0{i + 1} / </span>{link.tag}
            </Link>
          )}
          <Button className="">Resume</Button>
        </NavLink>
      </NavBar>
    </>
  );
}

export default Header;