import * as React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

// import About from "../About"
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import "./App.css";
import { BrowserRouter, Route, Routes , useParams } from "react-router-dom";
import Hero from "../Hero/Hero";
import SubNavBar from "../SubNavBar/SubNavBar";
import ProdcutDetails from "../ProductDetails/ProductDetails";


export default function App() {

  const url = "https://codepath-store-api.herokuapp.com/store";

const [products, setProducts] = useState();

  useEffect(() => {
    axios.get(url).then((response) => {
      setProducts(response.data.products)
      // console.log(products) 
    });
  }, [] );





  return (
    <div className="app">
      <BrowserRouter>

        <main>
          {/* <Navbar /> */}
          {/* <Sidebar /> */}
          {/* <Hero/> */}
          {/* <SubNavBar/> */}
          {/* <Home products={products}/> */}




          <Navbar/>





          <Routes>
            {/* <Route path="/" element={ <Navbar/>}/> */}
            {/* <Route path="/" element={ <SubNavBar/>}/> */}
              <Route path="/" element={ <Home products={products}/>}/>

            <Route path="products/:id" element ={<ProdcutDetails/>}/>


            {/* <Route path="/about" element={<About/>}/> */}
            {/* <Route path="/Buy" element={<Home products={products}/>}/> */}
            {/* <Route path="*" element={<p></p>}/> */}
            {/* <Route path="/Buy" element={ <Home products={products} /> }/> */}
          </Routes>

        </main>
      </BrowserRouter>
    </div>


  );
}


