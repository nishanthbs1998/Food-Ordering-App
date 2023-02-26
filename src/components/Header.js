import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/contexts/UserContext";
const Header = () => {
   const [isLoggedIn,setIsloggedIn]=useState(false)
   const {name,email}=useContext(UserContext)
  return (
    <div className="flex justify-between  max-sm:flex-col   bg-blue-100 p-2 shadow-md" >
      
        <a className="w-20 max-sm:flex max-sm:justify-center max-sm:w-full   " href="/">
          <img
           className="max-sm:h-20 "
            src="https://www.logomagicians.com/wp-content/uploads/2020/01/Small-86.jpg"
            alt="Logo"
          />
        </a>
      
        <div className="mt-3 flex sm:hidden justify-center">
          <ul className="flex gap-2 mt-3">
            
            <li><Link to="/">Home</Link> </li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/instamart">Instamart</Link></li>
            <li><button  className=" bg-red-500  text-white rounded p-1" onClick={()=>setIsloggedIn(!isLoggedIn)}>{isLoggedIn?"Logout":"Login"}</button> </li>
          </ul>
          
          
        
        </div>

    
        <ul className="flex gap-2 mt-3 max-sm:hidden  max-sm:justify-center">
          {name}
          
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