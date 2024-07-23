import { StateContext } from "../Context/AppProvider"
import { useContext } from "react"
const AddToCart=({addToCartItem})=>{
const cartPackage=useContext(StateContext)
let cartItemsAre=cartPackage.cartItems.map((item)=>{
    return(
        <div>
            <img src={item.img}/>
            <h6>{item.title}</h6>
        </div>
    )
})

    let addToCartResults=addToCartItem.map((item)=>{
       

        return(
            <div>
                <img src={item.img}/>
                <h6>{item.title}</h6>
            </div>
        )
    })
    return(
        <div className="add-to-cart-wrapper">
            <div className="add-to-cart-item">
                <h6 className="text-center">Your Cart</h6>
                {cartItemsAre}
            </div>
        </div>
    )
}

export default AddToCart