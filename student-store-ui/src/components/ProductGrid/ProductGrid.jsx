import React from "react";
import { Link } from "react-router-dom";






export default function ProductGrid({products, filterProducts, shoppingList, setShoppingList}) {




    function handleAdding (product) {
        let inTheCart = shoppingList?.find(item => item.id === product.id)
        
        if(inTheCart)
        {
            const updatedList = shoppingList?.map((item) => {
               if(item.id === product.id) {
                return {...item,quantity: item.quantity + 1 }
               }
               return item
            })
            setShoppingList(updatedList)
            
        } else {
            setShoppingList([...shoppingList, {...product, quantity: 1}])

            
        }

    }
    


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
        // console.log(updateList)
    }



    function displayQuantity (product) {
        
            return shoppingList?.map((item) => {
                if(item.id === product.id) {
                    return item.quantity
                }
            })
    
    }













   

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
                   <img src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR46nPvachKnCXtBEgQdNZ0c7125u9qqBormQ&usqp=CAU" alt="stars" style={{width: "20px", height: "20px" }}/>
                   <img src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR46nPvachKnCXtBEgQdNZ0c7125u9qqBormQ&usqp=CAU" alt="stars" style={{width: "20px", height: "20px" }}/>
                   <img src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR46nPvachKnCXtBEgQdNZ0c7125u9qqBormQ&usqp=CAU" alt="stars" style={{width: "20px", height: "20px" }}/>
                   <img src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR46nPvachKnCXtBEgQdNZ0c7125u9qqBormQ&usqp=CAU" alt="stars" style={{width: "20px", height: "20px" }}/>
                </div>
                <p className="product-price">{info.price.toFixed(2)}</p>
                </div>
                <div className="actions">
                  <div className="buttons">
                      <button      onClick={()=>{handleAdding(info)}}   className="add">
                        <i className="material-icons">add</i>
                      </button>
                    <button  onClick={() => {handleSubtracting(info)}} className="remove">
                        <i className="material-icons">remove</i>
                    </button>
                  </div>
                  <span className="quantity"><span className="amt">{displayQuantity(info)} </span></span>
                </div> 
        </div>
        </div>
        )
      }
    


    return(


        <div id="Buy" className="product-grid">
        <div className="content">
        <h3>Best Selling Products</h3>
        <div className="grid">
      {filterProducts?.map(product => createProduct(product))}
          </div>
        </div>
      </div>


    )


    
}

