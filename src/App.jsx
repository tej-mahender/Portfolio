import React from "react";
import "./App.css";
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/home/Home'
import ProjectDetail from "./components/projects/ProjectDetail";
 import Projects from './components/projects/Projects'
import RootLayout from "./RootLayout";
import RoutingError from './components/RoutingError'

const App = ({children}) => {
  const router = createBrowserRouter([
    {
      path:'',
        element: <RootLayout />,
        errorElement: <RoutingError />,
        children:[
        { path: "/", element: <Home /> },
        { path: "/projects", element: <Projects /> },
        { path: "/project/:slug", element: <ProjectDetail /> },
        ]
      }
  ])
  return (
    <RouterProvider router ={router}/>
  );
};

export default App;
