import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./src/components/Error";
import UserContext from "./src/utils/contexts/UserContext";
import Contact from "./src/components/Contact";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { Provider } from "react-redux";
import store from "./src/utils/store";
import { lazy, Suspense,useState } from "react";
import Shimmer from "./src/components/Shimmer";
import Instamart from "./src/components/Instamart";
import Cart from "./src/components/Cart";
const About = lazy(() => import("./src/components/About"));
const Profile = lazy(() => import("./src/components/Profile"));

const AppLayout = () => {
  const [newValue,setNewValue]=useState({
    name:"Nishanth BS",
    email:"nishanthbs18@gmail.com",
    setUserValue:(val)=>{
      setNewValue(val)
    }
    }
  )
  return (
    <Provider store={store}>
    <UserContext.Provider value={newValue} >
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: (
              <Suspense fallback={<h1>Profile loading...</h1>}>
                <Profile />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/instamart",
        element:<Instamart/>
      },
      {
        path: "/restaurant-menu/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
