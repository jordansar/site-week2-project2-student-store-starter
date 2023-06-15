import * as React from "react"
import "./SubNavBar.css"
import { useState } from "react"

export default function SubNavBar(products) {



  // console.log(products


    return(
        <nav className="sub-navbar">
        <div className="content">

          <div className="row">
            <div className="search-bar">
                <input type="text" className="search" placeholder="Search" onChange={event => setQuery(event.target.value.toLowerCase())}/>
                
                <i className="material-icons">search</i>
            </div>

            <div className="links">
                <span className="help"><i className="material-icons">help</i> Help </span>

                <div className="cart">
                  <a href="/"> My Cart 
                    <i className="material-icons">shopping_cart</i>
                  </a> 
                </div>
              
            </div>
          </div>

          <div className="row">
            <div className="hamburger-menu">
              <i className="material-icons">menu</i>
            </div>
            
            <ul className="category-menu open">
              <li className="is-active">
                <button>All Categories</button>
              </li>
              <li className="">
                <button>Clothing</button>
              </li>
              <li className="">
                <button>Food</button>
              </li>
              <li className="">
                <button>Accessories</button>
              </li>
              <li className="">
                <button>Tech</button>
              </li>
            </ul>

          </div>
         
        </div>
     </nav>
    )
}
