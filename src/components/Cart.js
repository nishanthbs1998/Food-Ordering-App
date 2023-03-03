import { useDispatch, useSelector } from "react-redux"
import { clearCart, removeItem } from "../utils/cartSlice"
const Cart=()=>{
    const cartItems=useSelector(store=>store.cart.items)
    const dispatch=useDispatch()
    return(
        <>
        
        <h1 className="m-2 text-2xl">Your Items</h1>
          {  cartItems.map(item=>{
           return( <div key={item.id} className="flex gap-2 m-2">
            <div>
                <h2>{item.name}</h2>
            <h2>Price: INR {item.price/100}</h2>
            </div>
            
            <button className="bg-red-100 p-1" onClick={()=>dispatch(removeItem(item))}>Remove</button>
            </div>)
            
        })}
        <button className="bg-red-400 p-1 m-2 rounded-md text-white" onClick={()=>dispatch(clearCart())}>Clear Cart</button>
        </>
    )
}

export default Cart