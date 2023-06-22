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
import ProductGrid from "../ProductGrid/ProductGrid"

export default function Home({products, shoppingList, setShoppingList }) {

  const [query, setQuery] = useState("")
  const [category, setCategory] = useState("")

  // const [qunatity, setQuantity] = useState(0)




  

  const filterProducts = products?.filter((product) => {
    
    const searchTerm = query.toLowerCase();
    const productName = product.name.toLowerCase();

    const buttonCategory = (category === "all categories") ? "" : category ;
    
    const searchMatch = searchTerm === "" || productName.includes(searchTerm);

    const categoryMatch = buttonCategory === "" || buttonCategory ===  product?.category;

    return searchMatch && categoryMatch;
    
    
  })


  


  return (
    <>
    <Hero/>

    <SubNavBar   category ={category}  products={products} setQuery={setQuery} setCategory={setCategory} query={query}/>


    


    <div className="home">
      
    <ProductGrid products = {products} filterProducts={filterProducts} shoppingList = {shoppingList} setShoppingList = {setShoppingList} />
  </div>


          
<About/>

<Contact/>

<Footer/>


  </>
  )
}
