import React from "react"
import Profile from './Profile'
import { Outlet } from "react-router-dom"
import UserContext from "../utils/contexts/UserContext"


class About extends React.Component{
    constructor(props){
        super(props)
        console.log("Parent constructor")
       
        
    }
    async componentDidMount(){
        console.log("Parent compDidMount")
         
    }

    componentWillUnmount(){
        clearInterval(this.inter)
        console.log("from unmount",this.inter)
    }

    render(){
         console.log("Parent render")
        return(
            <>

            <h1>This is the about page</h1>
            <UserContext.Consumer>
                {(val)=><h1>{val.email}</h1>}
            </UserContext.Consumer>
            <Outlet/>
            
            {/* <Profile name={"Child 1"} email={"child1@gmail.com"} compMount={"Child 1 compDidMount"} renderMsg={"Child 1 render"} console={"Child 1 constructor"}/> */}
            {/* <Profile name={"Child 2"} email={"child2@gmail.com"} compMount={"Child 2 compDidMount"} renderMsg={"Child 2 render"} console={"Child 2 constructor"}/> */}
            
            </>
            
        )
    }
    
    
}

export default About


