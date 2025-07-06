import React from "react";
import "./App.css";
import {createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from './components/home/Home'
import RootLayout from "./RootLayout";
import RoutingError from './components/RoutingError'

const App = ({children}) => {
  const router = createBrowserRouter([
    {
      path:'',
        element: <RootLayout />,
        errorElement: <RoutingError />,
        children:[
          {
            path:'/',
            element: <Home />
          }

        ]
      }
  ])
  return (
    <RouterProvider router ={router}>{children}</RouterProvider>
  );
};

export default App;
