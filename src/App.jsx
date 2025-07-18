import React, {useEffect, useState} from "react";
import "./App.css";
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/home/Home'
import ProjectDetail from "./components/projects/ProjectDetail";
 import Projects from './components/projects/Projects'
import KnowMore from "./components/about/KnowMore";
import RootLayout from "./RootLayout";
import RoutingError from './components/RoutingError'
import Loader from "./components/loader/Loader";

const App = ({children}) => {
    const [loading, setLoading] = useState(true);

  //    // Show loader for 4 seconds
  // useEffect(() => {
  //   const timer = setTimeout(() => setLoading(false), 4000);
  //   return () => clearTimeout(timer);
  // }, []);

  const router = createBrowserRouter([
    {
      path:'',
        element: <RootLayout />,
        errorElement: <RoutingError />,
        children:[
        { path: "/", element: <Home /> },
        { path: "/projects", element: <Projects /> },
        { path: "/project/:slug", element: <ProjectDetail /> },
        { path: "/know-more", element:  <KnowMore />},
        ]
      }
  ])
  return (
 <>
      {loading ? <Loader onFinish={() => setLoading(false)} /> : <RouterProvider router={router} />}
    </>  );
};

export default App;
