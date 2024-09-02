import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// assets
// import logo from "../assets/om-logo.png";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";

const Navbar = () => {
  // use theme from local storage if available or set light theme
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "retro"
  );

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("luxury");
    } else {
      setTheme("retro");
    }
  };

  // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <>
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/Home">
                  <li>HOME</li>
                </Link>
              </li>
              <li>
                <a>SHOP</a>
                <ul class="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/offers">
                  <li>OFFERS</li>
                </Link>
              </li>
              <li>
                <Link to="">
                  <li>MY ORDERS</li>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <li>CONTACT</li>
                </Link>
              </li>
            </ul>
          </div>
          <a class="btn btn-ghost text-xl">MONDAL'S</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            <li>
              <Link to="/home">HOME</Link>
            </li>
            <li>
              <details>
                <summary>SHOP</summary>
                <ul class="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/offers">
                <li>OFFERS</li>
              </Link>
            </li>
            <li>
              <Link to="/">
                <li>MY ORDERS</li>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <li>CONTACT</li>
              </Link>
            </li>
          </ul>
        </div>
        <div class="navbar-end mr-10">
          <Link to="/login">
          <a class="btn">Login</a>
          </Link>
        </div>
        <div className="flex-none">
          {/* Toggle button here */}
          <button className="btn btn-square btn-ghost">
            <label className="swap swap-rotate w-12 h-12">
              <input
                type="checkbox"
                onChange={handleToggle}
                // show toggle image based on localstorage theme
                checked={theme === "retro" ? false : true}
              />
              {/* light theme sun image */}
              <img src={sun} alt="retro" className="w-8 h-8 swap-on" />
              {/* dark theme moon image */}
              <img src={moon} alt="" className="w-8 h-8 swap-off" />
            </label>
          </button>
        </div>
      </div>
    </>
  );
};
export default Navbar;
