import { useState } from "react";
import {  navLinks } from "../constants";

const NavItems = () => {
  return (
    <div>
      <ul className="nav-ul">
        {/* {["Home", "About", "Experience", "Projects", "Contact"].map(
          (item, index) => (
            <li key={index} className="nav-li">
              <a href="/" className="nav-li_a">
                {item}
              </a>
            </li>
          )
        )} */}

        {/* More optimized Approach */}
        {navLinks.map(({id, name, href})=> (
            <li key={id} className="nav-li">
                <a href={href} className="nav-li_a" onClick={() => {}}>
                    {name}
                </a>
            </li>
        ))}
      </ul>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className="text-neutral-400 hover:text-white font-bold text-xl transition-colors"
          >
            Pratik
          </a>
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              alt="toggle"
              className="w-8 h-8"
            />
          </button>
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
