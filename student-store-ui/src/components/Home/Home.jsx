import * as React from "react"
import "./Home.css"
import { useState } from "react"
import Navbar from "../Navbar/Navbar"
import SubNavBar from "../SubNavBar/SubNavBar"

import { Link } from "react-router-dom"
import Hero from "../Hero/Hero"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"

export default function Home({products}) {

  const [query, setQuery] = useState("")
  const [category, setCategory] = useState("")




  

  const filterProducts = products?.filter((product) => {
    
    const searchTerm = query.toLowerCase();
    const productName = product.name.toLowerCase();

    const buttonCategory = (category === "all categories") ? "" : category ;
    
    const searchMatch = searchTerm === "" || productName.includes(searchTerm);

    const categoryMatch = buttonCategory === "" || buttonCategory ===  product?.category;

    return searchMatch && categoryMatch;
    
    
  })







  
    function createProduct(info) {
      return(
        
        <div className="product-card" key={info.id}>
          <Link to= {"products/" + info.id}>
          <div className="media">
              <img src={info.image}/> 
            </div>
            </Link>
            <div className="product-info">
              <div className="main-info">
              <p className="product-name"> {info.name}</p>
              <div className="stars">
                 {/* <img src="https://assets.stickpng.com/images/580b585b2edbce24c47b2915.png" alt="stars" style={{width: "20px", height: "20px" }}/>
                 <img src="https://assets.stickpng.com/thumbs/580b585b2edbce24c47b2915.png" alt="stars" style={{width: "20px", height: "20px" }}/>
                 <img src="https://assets.stickpng.com/thumbs/580b585b2edbce24c47b2915.png" alt="stars" style={{width: "20px", height: "20px" }}/>
                 <img src="https://assets.stickpng.com/thumbs/580b585b2edbce24c47b2915.png" alt="stars" style={{width: "20px", height: "20px" }}/>
                 <img src="https://assets.stickpng.com/images/58443d75a6515b1e0ad75b7e.png" alt="stars" style={{width: "20px", height: "20px" }}/> */}
                 {/* <img src="	https://assets.stickpng.com/thumbs/58443d75a6515b1e0ad75b7e.png" alt="stars" style={{width: "20px", height: "20px" }}/> */}
              </div>
              <p className="product-price">{info.price.toFixed(2)}</p>
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
      )
    }



  
  return (
    <>



    <Hero/>

    <SubNavBar   category ={category}  products={products} setQuery={setQuery} setCategory={setCategory} query={query}/>

    


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


          

<About/>

<Contact/>

<Footer/>


  </>
  )
}
