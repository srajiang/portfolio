import React from 'react';
import { B as Button, L as Link } from './Base.styled';
import { NavLink, NavBar, NavHamburgerMenu, Menu } from './Margin.styled';
import { useState, useEffect } from 'react';
import ModeToggle from "./ModeToggle";


/* 
  TODO: 
  Add Nav href anchors + resume links
  Add vertical nav option
  Add logo? 
*/

const Header = ({theme, toggleTheme}) => {

  const [scrollDir, setScrollDir] = useState(null);
  const [currScrollY, setCurrScrollY] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(null);

  useEffect(() => {
    document.addEventListener('scroll', () => setCurrScrollY(window.pageYOffset));
  }, []);

  // sets scroll direction based on curr vs. last scroll y pos
  const handleScroll = () => {
    
    if (lastScrollY === null) return setLastScrollY(currScrollY);
    (currScrollY > lastScrollY) ? setScrollDir('down'): setScrollDir('up');
    
    setLastScrollY(currScrollY);
  }

  // toggles sticky nav effect when scroll dir changes
  const toggleStickyNav = () => {
  }

  useEffect(handleScroll, [currScrollY]);
  useEffect(toggleStickyNav, [scrollDir]);

  const navLinks = [{tag: "About", url: ""}, 
                    {tag: "Projects", url: ""}, 
                    {tag: "Contact", url: ""},
                  ];

  return (
    <>
      <NavHamburgerMenu scrollDir={scrollDir} YOffset={lastScrollY}>
        {["one", "two", "three"].map((tag, i) => (
          <div className={`hamburger-box ${tag}`} key={i}>
            <Menu />
          </div>
        ))}
      </NavHamburgerMenu>
      <NavBar scrollDir={scrollDir} YOffset={lastScrollY}>
        <NavLink>
          <Link className="anchor" onClick={toggleTheme}>
            <span>
              <ModeToggle toggleTheme={toggleTheme} />&nbsp;
            </span>
            {theme == "dark" ? `Light` : `Dark`}
          </Link>
          {navLinks.map((link, i) => (
            <Link key={i} className="anchor">
              <span>0{i + 1} / </span>
              {link.tag}
            </Link>
          ))}
          <Button className="">Resume</Button>
        </NavLink>
      </NavBar>
    </>
  );
}

export default Header;