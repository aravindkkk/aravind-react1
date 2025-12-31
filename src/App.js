import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Header from "./Components/Header";
import Body from "./Components/Body";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Restarant from "./Components/Restaurant";
import Error from "./Components/Error";
import userContext from "./utils/UserContext";
import appStore from "./utils/appStores";
import { Provider } from "react-redux";


//chunking
//code splitting
//demand loading
//dynamic bundling
//lazy loading
//dynamic import

const Cart = lazy(() => import("./Components/Cart"));

function AppLayout() {
    const [userName, setUserName] = useState("Default");
    const userContextName         = useContext(userContext);
    useEffect(() => {
        const data = {
            name : "kamal Hassan",
        }
        setUserName(data.name);

    }, []);


    return (
            <>
            <Provider store={appStore}>
            <userContext.Provider value={ { loggedInUser : userName ,setUserName } } >  
            <Header />
            <Outlet />
            </userContext.Provider>
            </Provider>
            </>

);
};


const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          index: true,
          element: <Body />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/restarant/:resId",
          element: <Restarant />,
        },
        {
          path: "/cart",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Cart />
            </Suspense>
          ),
        },
      ],
      errorElement: <Error />,
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true, // ✅ this removes the warning
    },
  }
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
