import { createContext } from "react";

const UserContext=createContext({
    name:"Nishanth BS",
    email:"nishanthbs18@gmail.com",
    setUserValue:(obj)=>{}
})

export default UserContext