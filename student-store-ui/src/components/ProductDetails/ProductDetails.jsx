import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetails.css"
import Navbar from "../Navbar/Navbar";





 export default function ProdcutDetails () {


    const param = useParams()
    const [product, setProduct] = useState({})


        // console.log(descriptions)

    useEffect( () => {
         axios.get(`https://codepath-store-api.herokuapp.com/store/${param.id}`).then(response => {
            setProduct(response.data.product)
        })
        }
         ,[])


    return(
        <>
        <Navbar/>
        <div className="product-detail" key={param.id}>
            <div className="product-container">
            <div className="product-image">
            <img src={product?.image} alt="" style={{width: "50%"}} />
            </div>

            <p>{product?.description}</p>
            </div>
        </div>
        </>
    )

}