import React from 'react';
class Profile extends React.Component{

    constructor(){
      console.log( "super===this? ", super()===this)
        this.state={
            name:"Nish",
            email:"nish@gmail.com"
        }
        console.log("this:",this)
    }

    async componentDidMount(){
        //         this.inter=setInterval(()=>{
        //     console.log("Interval started")
        // },1000) 
        console.log(this.props.compMount)
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=15.36548488436243&lng=75.12987278401853&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING")
        console.log("After fetch")
        const json=await data.json()
        
        console.log("After data.json()")
        console.log(json)
        

    }

    componentDidUpdate(){
        console.log("Component updated")
    }

    componentWillUnmount(){
        clearInterval(this.inter)
        console.log("from unmount",this.inter)
    }

    render(){
        console.log(this.props.renderMsg)
        return (
            <>
                <h1>Profile</h1>
                {/* <button >Click Me!</button> */}
                <h2 onClick={()=>this.setState({
                    name:"Nish updated"
                })}>Name: {this.state.name}</h2>
                <h2 onClick={()=>this.setState({
                    email:"Email updated"
                })}>Email:{this.state.email}</h2>
            </>
        )
    }
}

export default Profile