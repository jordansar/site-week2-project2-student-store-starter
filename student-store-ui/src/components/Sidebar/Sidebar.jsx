import * as React from "react"
import "./Sidebar.css"
import { useState, useEffect } from "react"
import ShoppingCart from "../ShoppingCart/ShoppingCart"


export default function Sidebar({shoppingList, setShoppingList, receiptText, setReceiptText}) {
// console.log(shoppingList)
  const [isActive, setIsActive] = useState(null)

  const [receipt, setReceipt] = useState(false)


  const [subTotal, setSubTotal] = useState(0);


  useEffect (() => {
      let theSubtotal = 0
      shoppingList?.map((item) => {
          theSubtotal = theSubtotal + item.price * item.quantity 
      })
      setSubTotal(theSubtotal)
  })




  function displayReceipt () {
    let total = subTotal * 1.0875;
    return(
      <div> 
        <ul>
          <li style={{color: "white"}} > Before taxes, the subtotal was {(subTotal).toLocaleString("en-US", {style: "currency", currency: "USD"})} </li>
          <li style={{color: "white"}}> After taxes and fees were applied, the total comes out to {(total).toLocaleString("en-US", {style: "currency", currency: "USD"})}</li>
      </ul>

      <button  onClick={ ()=>{setShoppingList([])} } id="exitButton"> Exit</button>
    </div>
    )
    
    }


  return (
    
    <>

{ !isActive ? (

    <section className="sidebar closed">
        <div className="wrapper">
          <button  onClick={()=>{setIsActive(!isActive)}} className="toggle-button button closed">
            <i className="material-icons md-48">arrow_forward</i>
          </button>

        <div className="shopping-cart">
              <div onClick={()=>{setIsActive(!isActive)}} className="cart-icons">
                <span className="cart-icon icon button">
                  <i className="material-icons md-48">add_shopping_cart</i>
                </span>
                <span className="cart-icon icon button">
                  <i className="material-icons md-48">monetization_on</i>
                </span>
                <span className="cart-icon icon button">
                  <i className="material-icons md-48">fact_check</i>
                </span>
              </div>
            </div>
        </div>
      </section>

  ) : (
  <section className="sidebar open">
  <div className="wrapper">
  <button onClick={()=>{setIsActive(!isActive)}} className="toggle-button button open">
    <i className="material-icons md-48">arrow_forward</i>
  </button>
    <div className="shopping-cart">
      <div className="open">
        <h3 className="">Shopping Cart 
        <span className="button">
          <i className="material-icons md-48">add_shopping_cart</i>
        </span>
      </h3>



      <ShoppingCart shoppingList={shoppingList} setShoppingList={setShoppingList} />
      <div className="checkout-form">

      <p className="is-danger"></p>
        

      <div className="field">
          <div className="control">
          <button onClick={()=>{setReceipt(true)}} className="button checkout-button">Checkout</button>
          </div>
      </div>
    </div>

    




            <div className="checkout-success">
              <h3>Checkout Info 
                <span className="icon button">
                  <i className="material-icons md-48">fact_check</i>
                </span>
              </h3>
  
          <div className="content">
           { 
            receipt ? displayReceipt() : (<></>)
           } </div> 


    </div>
  </div>
  </div>
  </div>
</section> )
}

</>
  )
}
