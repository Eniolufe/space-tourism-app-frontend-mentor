import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../starter-code/assets/shared/logo.svg";
import hamburger from "../starter-code/assets/shared/icon-hamburger.svg";
import closeIcon from "../starter-code/assets/shared/icon-close.svg";

export default function Header() {
  const [toggler, setToggler] = useState(false);

  const handleToggler = () => setToggler(!toggler);

  const closeMobileMenu = () => setToggler(false);

  return (
    <>
      <header className="header flex items-center justify-between w-full lg:flex-row">
        <div>
          <Link to="/" onClick={closeMobileMenu}>
            <img src={logo} alt="Space Tourism" title="Space Tourism" />
          </Link>
        </div>

        <nav className={toggler ? "navbar active" : "navbar"}>
          <ul className="flex">
            <li className="inline-block md:border-b-2 border-transparent hover:border-white duration-300">
              <Link to="/" onClick={closeMobileMenu}>
                <span className="px-3 font-bold">00</span>Home
              </Link>
            </li>
            <li className="inline-block md:border-b-2 border-transparent hover:border-white duration-300">
              <Link to="/destination" onClick={closeMobileMenu}>
                <span span className="px-3">
                  01
                </span>
                Destination
              </Link>
            </li>
            <li className="inline-block md:border-b-2 border-transparent hover:border-white duration-300">
              <Link to="/crew" onClick={closeMobileMenu}>
                <span span className="px-3">
                  02
                </span>
                Crew
              </Link>
            </li>
            <li className="inline-block md:border-b-2 border-transparent hover:border-white duration-300">
              <Link to="/technology" onClick={closeMobileMenu}>
                <span span className="px-3">
                  03
                </span>
                Technology
              </Link>
            </li>
          </ul>
        </nav>

        <button className="hamburger lg:hidden" onClick={handleToggler}>
          {toggler ? (
            <img src={closeIcon} alt="menu" />
          ) : (
            <img src={hamburger} alt="close menu" />
          )}
        </button>
      </header>
    </>
  );
}
