import { Link } from "gatsby"
import React from "react"
import Logo from "../images/gatsby-icon.png"

const Header = () => (
  <header
    className="w-screen flex justify-center bg-offwhite shadow-2xl h-24 z-10 relative"
  >
    <div
      className="flex content-start w-1/12"
    >
      <Link
        to="/"
      >
        <img src={Logo} className="px-8 py-8 h-full flex" title="Icon" alt="Icon"></img>
      </Link>
    </div>
    <div
      className="flex text-secondary font-mono w-half justify-between mr-12 no-underline text-xl"
    >
      <Link
        to="/"
        className="px-8 py-8 hover:text-primary"
      >
        Home
      </Link>
      <Link
        to="/blog/"
        className="px-8 py-8 hover:text-primary"
      >
        Blog
      </Link>
      <Link
        to="/about/"
        className="px-4 py-8 hover:text-primary"
      >
        About
      </Link>
    </div>
  </header>
)


export default Header
