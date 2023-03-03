import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useOnline from "../utils/custom-hooks/useOnline";
import logo from "../../assets/logo.jpg"
const Header = () => {
   const [isLoggedIn,setIsloggedIn]=useState(false)
   const isOnline=useOnline()
   
   
   const cartItems=useSelector(store=>store.cart.items.length)
  return (
    <div className="flex justify-between  max-sm:flex-col    p-2 shadow-md" >
      
        <a className="w-20 max-sm:flex max-sm:justify-center max-sm:w-full   " href="/">
          <img
          data-testid="logo"
           className="max-sm:h-20 rounded-md"
           src={logo}
           // src="https://www.logomagicians.com/wp-content/uploads/2020/01/Small-86.jpg"
            alt="Logo"
          />
        </a>

    
        <ul className="flex gap-2 mt-3   max-sm:justify-center">
       <li data-testid="online-status" title={isOnline?"You are Online":"You are Offline"}>{isOnline?"🔵":"🔴"}</li>  
          <li><Link data-testid="cart" to="/cart">Cart - {cartItems}</Link> </li>
          <li><Link to="/">Home</Link> </li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
           <li><Link to="/instamart">Instamart</Link></li>
          <li><button  className=" bg-red-500  text-white rounded p-1" onClick={()=>setIsloggedIn(!isLoggedIn)}>{isLoggedIn?"Logout":"Login"}</button> </li>
        </ul>
      </div>
    
  );
};

export default Header