import * as React from "react"
import "./Home.css"
import { useState } from "react"
import Navbar from "../Navbar/Navbar"
import SubNavBar from "../SubNavBar/SubNavBar"

import { Link } from "react-router-dom"

export default function Home({products}) {

  const [query, setQuery] = useState("")
  const [category, setCategory] = useState("")


  // const categories = ["All Categories", "Clothing", "Food", "Accessories", "Tech"]


  

  const filterProducts = products?.filter((product) => {
    
    const searchTerm = query.toLowerCase();
    const productName = product.name.toLowerCase();

    const buttonCategory = (category === "all categories") ? "" : category ;
    
    const searchMatch = searchTerm === "" || productName.includes(searchTerm);

    const categoryMatch = buttonCategory === "" || buttonCategory ===  product?.category;

    return searchMatch && categoryMatch;
    
    
  })






  //   products?.map(product => {
  //   if(query === ""){
  //     return product;
  //   } else if (products.name.toLowerCase().includes(query.toLowerCase())){
  //     return product;
  //   }
  // })











  function createProduct(info) {
    return(
      <Link to= {"products/" + info.id}>
      <div className="product-card" key={info.id}>
        <div className="media">
          <a>
            <img src={info.image}/> 
          </a>
          </div>
          <div className="product-info">
            <div className="main-info">
            <p className="product-name"> {info.name}</p>
            <div className="stars">
               {/* <img src="https://assets.stickpng.com/images/580b585b2edbce24c47b2915.png" alt="stars" style={{width: "20px", height: "20px" }}/>
               <img src="https://assets.stickpng.com/thumbs/580b585b2edbce24c47b2915.png" alt="stars" style={{width: "20px", height: "20px" }}/>
               <img src="https://assets.stickpng.com/thumbs/580b585b2edbce24c47b2915.png" alt="stars" style={{width: "20px", height: "20px" }}/>
               <img src="https://assets.stickpng.com/thumbs/580b585b2edbce24c47b2915.png" alt="stars" style={{width: "20px", height: "20px" }}/>
               <img src="https://assets.stickpng.com/images/58443d75a6515b1e0ad75b7e.png" alt="stars" style={{width: "20px", height: "20px" }}/> */}
               <img src="	https://assets.stickpng.com/thumbs/58443d75a6515b1e0ad75b7e.png" alt="stars" style={{width: "20px", height: "20px" }}/>
            </div>
            <p className="product-price">{info.price}</p>
            </div>
            <div className="actions">
              <div className="buttons">
                  <button className="add">
                    <i className="material-icons">add</i>
                  </button>
                <button className="remove">
                    <i className="material-icons">remove</i>
                </button>
              </div>
            </div>
            
    </div>
    </div>
    </Link>
    )
  }


  
  return (
    <>

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
          {/* <Link to="/about"> About </Link> */}
          {/* <Link to="/Buy"> Buy Now</Link> */}
        </ul>
      </div>
    </nav>





     
    <div className="hero">
<div className="content">
  <div className="intro"><h1>Welcome!</h1>
  <h1>Find Your Merch!</h1>
  <p>We have all kinds of goodies. Click on any of the items to start filling up your shopping cart. Checkout whenever you're ready.</p>
  </div>
  <div className="media">
    <img src={"https://codepath-student-store-demo.surge.sh/assets/student_store_icon.18e5d61a.svg"} alt="hero" className="hero-img"/>
      </div>
      </div>
    </div>









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
              <li className="is-active">
                <button onClick={ () => setCategory("all categories")}>All Categories</button>
              </li>
              <li className="">
                <button onClick={ () => setCategory("clothing")} >Clothing</button>
              </li>
              <li className="">
                <button onClick={ () => setCategory("food")} >Food</button>
              </li>
              <li className="">
                <button onClick={ () => setCategory("accessories")} >Accessories</button>
              </li>
              <li className="">
                <button onClick={() => setCategory("tech")} >Tech</button>
              </li>
            </ul>

          </div>
         
        </div>
     </nav>











    <div className="home">
      <div id="Buy" className="product-grid">
        <div className="content">
        <h3>Best Selling Products</h3>
        <div className="grid">
      {filterProducts?.map(product => createProduct(product))}
          </div>
        </div>
      </div>
  </div>
  </>
  )
}
