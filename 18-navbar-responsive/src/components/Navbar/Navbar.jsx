/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import { FaBars } from "react-icons/fa";

import { useState, useEffect, useRef } from "react";
import { links, social } from "../../Data";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <nav>
      <div className="nav-main">
        <div className="nav-header">
          <img
            src="https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg"
            className="logo"
          />
          <button className="toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>

        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.url}>{link.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((icon) => {
            return (
              <li key={icon.id}>
                <a href={icon.url}>{icon.icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
