import Header from "../Header"
import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import {StaticRouter} from "react-router-dom/server"
import store from "../../utils/store"

//Unit tests

test("Logo should load on Homepage",()=>{
    const header=render(
    <StaticRouter>
    <Provider store={store}>
        <Header/>
    </Provider>
    </StaticRouter>)
    const logo=header.getByTestId("logo")
    expect(logo.src).toBe("http://localhost/dummy")
})

test("Cart should be 0 on initial load of Homepage",()=>{
    const header=render(
    <StaticRouter>
    <Provider store={store}>
        <Header/>
    </Provider>
    </StaticRouter>)
    const cart=header.getByTestId("cart")
   // console.log(cart.innerHTML)
    expect(cart.innerHTML).toBe("Cart - 0")
})

test("Status should be online when Homepage is loaded",()=>{
    const header=render(
    <StaticRouter>
    <Provider store={store}>
        <Header/>
    </Provider>
    </StaticRouter>)
    const isOnline=header.getByTestId("online-status")
    
    console.log("Header: ",header)
    expect(isOnline.innerHTML).toBe("🔵")
})

