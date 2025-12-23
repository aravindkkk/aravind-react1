import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Header from "./Components/Header";
import Body from "./Components/Body";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Restarant from "./Components/Restaurant";
import Error from "./Components/Error";

function AppLayout() {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    );
};


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
     {
        path: "/",
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
    ],
    errorElement: <Error />,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
