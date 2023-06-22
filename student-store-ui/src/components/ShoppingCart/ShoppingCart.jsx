
import React, { useEffect, useState } from "react";





export default function shoppingCart ({shoppingList, setShoppingList}) {


    const [subTotal, setSubTotal] = useState(0);
    let S


    useEffect (() => {
        let theSubtotal = 0
        shoppingList?.map((item) => {
            theSubtotal = theSubtotal + item.price * item.quantity 
        })
        setSubTotal(theSubtotal)
    })




    // console.log(shoppingList)
    return(
    <div className="CartTable">
            <div className="header">
                <div className="header-row">
                    <span className="flex-2">Name</span>
                    <span className="center">Quantity</span>
                    <span className="center">Unit Price</span>
                    <span className="center">Cost</span>
                </div>

                

                {shoppingList?.length === 0 ? (
                    <div> No items in the list</div>
                ): (
                    <div>{shoppingList.map((item) => (
                        <div className="product-row">
                            <span className="flex-2 cart-product-name"> {item.name}</span>
                            <span className="center cart-product-quantity">{item.quantity}</span>
                            <span className="center cart-product-price">{`$ ${(item.price).toFixed(2)}`}</span>
                            <span className="center cart-product-subtotal">{(item.quantity * item.price).toFixed(2)}</span>
                        </div>
                        ))} 
                    </div>
                )}  
                
            </div>



            {shoppingList?.length === 0 ? (
                <div></div>
            ): (
         
    <div className="receipt">
        <div className="receipt-subtotal">
            <span className="label">Subtotal</span>
            <span></span>
            <span></span>     
            <span className="center subtotal">{(subTotal).toFixed(2)}</span>
        </div>
        
        <div className="receipt-taxes">
            <span className="label">Taxes and Fees</span>
            <span></span>
            <span></span>
            <span className="center">{((subTotal * .0875)).toFixed(2)}</span>
        </div>
        
        <div className="receipt-total">
            <span className="label">Total</span>
            <span></span>
            <span></span>
            <span className="center total-price">{(subTotal + (subTotal * .0875)).toFixed(2)}</span>
        </div>
    </div>
    
    

    )}
    </div>
    )
}