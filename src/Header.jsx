import React from 'react';
import { throttle } from 'underscore';
import { B, L } from './Base.styled';
import { NavLink, NavBar, NavHamburgerMenu, Menu } from './Margin.styled';
import { useState, useEffect } from 'react';
import ModeToggle from "./ModeToggle";


/* 
  TODO: 
  Add Nav href anchors + resume links
  Add vertical nav option
  Add logo? 
*/
const Y_MIN = 0;
const Y_MAX = 100;

const navOptions = {
  INACTIVE: 0,
  SLIDEUP: 1,
  ACTIVATE: 2, 
  SLIDEDOWN: 3,
}

const Header = ({theme, toggleTheme}) => {

  const [scrollDir, setScrollDir] = useState(null);
  const [YOffset, setYOffset] = useState(0);
  const [lastYOffset, setLastYOffset] = useState(null);
  const [navState, setNavState] = useState(navOptions.INACTIVE);

  useEffect(() => {
    document.addEventListener('scroll', () => setYOffset(window.pageYOffset));
  }, []);

  // sets scroll direction based on curr vs. last scroll y pos
  const handleScroll = () => {
    
    if (lastYOffset === null) return setLastYOffset(YOffset);
    (YOffset > lastYOffset) ? setScrollDir('down'): setScrollDir('up');
    
    setLastYOffset(YOffset);
  }
  const throttledHandleScroll = throttle(handleScroll, 200)

  const toggleNavState = () => {
    if (YOffset <= Y_MIN) {
      setNavState(navOptions.INACTIVE);
      return;
    }
    
    if ( scrollDir === 'down') {
      (YOffset > Y_MIN  && YOffset < Y_MAX) 
       ? setNavState(navOptions.ACTIVATE)
       : setNavState(navOptions.SLIDEUP);
    } else if (scrollDir === "up" && YOffset >= Y_MAX ) {
      setNavState(navOptions.SLIDEDOWN);
    }
  }
    
  useEffect(throttledHandleScroll, [YOffset]);
  useEffect(toggleNavState, [lastYOffset])


  const navLinks = [{tag: "About", url: ""}, 
                    {tag: "Projects", url: ""}, 
                    {tag: "Contact", url: ""},
                  ];

  return (
    <>
      <NavHamburgerMenu navState={navState}>
        {["one", "two", "three"].map((tag, i) => (
          <div className={`hamburger-box ${tag}`} key={i}>
            <Menu />
          </div>
        ))}
      </NavHamburgerMenu>
      <NavBar navState={navState}>
        <L className="ui-toggle" onClick={toggleTheme}>
          <span>
            <ModeToggle toggleTheme={toggleTheme} />
            &nbsp;/&nbsp;
          </span>
          {theme === "dark" ? "light" : "dark"}
        </L>
        <NavLink>
          {navLinks.map((link, i) => (
            <L key={i} className="anchor">
              <span>0{i + 1} / </span>
              {link.tag}
            </L>
          ))}
          <B className="">Resume</B>
        </NavLink>
      </NavBar>
    </>
  );
}

export default Header;