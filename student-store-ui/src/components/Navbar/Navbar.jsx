import * as React from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
   
    <nav className="navbar">
    <div className="content">
      <div className="logo">
        <a href="https://codepath-student-store-demo.surge.sh/">
          <img src="https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg" alt="codepath logo"  />
        </a>
      </div>
      <div className="socials">
      <img src={"https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"} alt="twitter logo" className="twitter-logo-img"></img>
      <img src={"https://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png"} alt="insta logo" className="insta-logo-img"></img>
      <img src={"https://www.transparentpng.com/download/facebook-logo-png/facebook-logo-free-download-transparent-3.png"} alt="facebook logo" className="facebook-logo-img"></img>
      </div>


      <ul className="links">
        <li><a href="/">Home</a></li>
        <li><a href="/#About">About</a></li>
        <li><a href="/#Contact">Contact Us</a></li>
        <li><a href="/#Buy">Buy Now</a></li>
      </ul>
    </div>
  </nav>

  )
}
