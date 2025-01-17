import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetails.css"
import Navbar from "../Navbar/Navbar";





 export default function ProdcutDetails ({shoppingList ,setShoppingList}) {


    const param = useParams()
    const [product, setProduct] = useState({})




    function handleSubtracting (product) {
        let ifInCart = shoppingList?.find(item => item.id === product.id)

        if(ifInCart) 
        {
            let updateList = shoppingList?.map((item) => {
              if(item.id === product.id)  {
                  if (item.quantity > 0){
                    return {...item, quantity: item.quantity - 1}
                  }
                }
                return item
        
            })
            updateList = updateList.filter(item => item.quantity > 0)
            setShoppingList(updateList)
        }
    }

    const url = "http://localhost:3001/";

    

    useEffect( () => {
         axios.get(`${url}${param.id}`).then(response => {
            setProduct(response.data)
            // console.log(response.data)
        })
        }
         ,[])


    return(
        <>
        <div className="product-detail" key={param.id}>
            <div className="product-container">
            <img src={product?.image} alt="" style={{width: "550px", height: "550px" }} />
            <p>{product?.description}</p>
            </div>
        </div>
        </>
    )

}