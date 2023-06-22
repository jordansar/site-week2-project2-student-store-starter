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
  // const url = "http://localhost:3000/";

const [products, setProducts] = useState();
const [shoppingList, setShoppingList] = useState([])


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
          <Navbar/>
          <Sidebar shoppingList={shoppingList} setShoppingList={setShoppingList}  />


          <Routes>
            <Route path="/" element={ <Home products={products} shoppingList={shoppingList} setShoppingList={setShoppingList} />}/>
{/* {console.log(shoppingList)} */}
            <Route path="products/:id" element ={<ProdcutDetails shoppingList={shoppingList} setShoppingList= {setShoppingList} />}/>
          </Routes>

        </main>
      </BrowserRouter>
    </div>


  );
}


