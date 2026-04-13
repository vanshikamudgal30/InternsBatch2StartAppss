import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Navbar from './components/Navbar';
import Param from './components/Param';
import Course from "./components/Course";
import Mock from "./components/Mock";
import Report from "./components/Report";
import NotFound from './components/NotFound';

const router=createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <Navbar />
        <Home />
      </div>
    },

    {
      path:"/about",
      
      element:
      <div>
        <Navbar/>
        <About />
      </div>
    },

    {
      path:"/blog",
      element:
      <div>
        <Navbar />
        <Blog />
      </div>,
      children:[
        {
          path:'course',
          element:<Course/>
        },
        {
          path:'mock-tests',
          element:<Mock />
        },
        {
        path:'reports',
        element:<Report/>
        },
        {
          path:'*',
          element:<NotFound/>
        }
      ]
    },

    {
      path:"/student/:id",
      element:
      <div>
        <Navbar />
        <Param />
      </div>
    }
]
);

function App  ()  {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
