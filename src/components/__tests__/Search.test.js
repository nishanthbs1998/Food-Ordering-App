import { fireEvent, render, waitFor } from "@testing-library/react"
import { StaticRouter } from "react-router-dom/server"
import { Provider } from "react-redux"
import store from "../../utils/store"
import Body from "../Body"
import { RESTAURANT_DATA } from "../../../constants"
import "@testing-library/jest-dom";


global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA); //Size of RESTAURANT_DATA matters. It should take similar or more time than actual data so that waitFor() is not returned before the real data is loaded.
    },
  });
});

test("Shimmer should load on Homepage",()=>{
   
    const body=render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    )
   
    const shimmer=body.getByTestId("shimmer")
   //  console.log(shimmer)
     expect(shimmer.children.length).toBe(10)
     
})

test("Restaurant should load on Homepage",async ()=>{

    const body=render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    )
   
    await waitFor(() =>{
        const resList = body.getByTestId("restaurant-list");
    expect(resList.children.length).toBe(16);
    });
 

})

//Integration test
test("Searching the should return 3 items",async()=>{
    const body=render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    )

    await waitFor(()=>expect(body.getByTestId("search-input"))) //Waiting for data to load and shimmer to get replaced.

    const input=body.getByTestId("search-input")
    fireEvent.change(input,{
        target:{
            value:"the"
        }
    })

    const searchBtn=body.getByTestId("search-btn")
    fireEvent.click(searchBtn)
    const resList=body.getByTestId("restaurant-list")

    expect(resList.children.length).toBe(4)
})
