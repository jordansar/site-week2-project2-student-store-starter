import * as React from "react"
import "./SubNavBar.css"
import { useState } from "react"

export default function SubNavBar({products, setQuery, setCategory, query,category }) {



  // console.log(products


    return(




    <nav className="sub-navbar">
    <div className="content">

      <div className="row">
        <div className="search-bar">
            <input type="text" className="search" value={query} placeholder="Search" onChange={ (event) => setQuery(event.target.value) }/>
            
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
          <li className= {category === 'all categories' ? 'is-active' : "" }>
            <button onClick={ () => setCategory("all categories")  }>All Categories</button>
          </li>
          <li className= {category === 'clothing' ? 'is-active' : "" }>
            <button onClick={  () => setCategory("clothing")} >Clothing</button>
          </li>
          <li className= {category === 'food' ? 'is-active' : "" }>
            <button onClick={ () => setCategory("food")} >Food</button>
          </li>
          <li className= {category === 'accessories' ? 'is-active' : "" }>
            <button onClick={ () => setCategory("accessories")} >Accessories</button>
          </li>
          <li className= {category === 'tech' ? 'is-active' : "" }>
            <button  onClick={() => setCategory("tech")} >Tech</button>
          </li>
        </ul>

      </div>
     
    </div>
 </nav>











    )
}
