import { useContext } from "react";
import UserContext from "../utils/contexts/UserContext";

const Footer = () => {
  const {name,email}=useContext(UserContext)
  return <div className="flex-col m-5 p-2">
    <h1 className="flex justify-center">Built with 💗 by {name} </h1>
    <h1 className="flex justify-center text-xs">Reach out to me @ {email} </h1>
  </div>;
};

export default Footer