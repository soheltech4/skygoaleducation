import {
    createBrowserRouter,
  } from "react-router-dom";
  import "./index.css";
import Main from "./Main/Main";
import Home from "./Shared/Home/Home/Home";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: 
      [
        {
        path: "/",
        element: <Home></Home>
        }
      ]

    },
  ]);

export default router;