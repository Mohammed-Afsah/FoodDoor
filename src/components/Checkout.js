import { useContext } from "react"
import {StateContext} from "../Context/AppProvider"
const Checkout=()=>{
  const cartPackage=useContext(StateContext)
  let cartItemsAre=cartPackage.cartItems.map((item)=>{
    return(
        <div>
            <img src={item.img}/>
            <h6>{item.title}</h6>
        </div>
    )
})

    return (
        <div className="checkout">
            <h2>this is a checkout page</h2>
            {cartItemsAre}
        </div>
    )
}
export default Checkout