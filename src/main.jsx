import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Components/Home/Home.jsx'
import Header from './Components/Header/Header.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'


import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Users from './Components/Users/Users.jsx'
import UserDetails from './Components/UserDetails/UserDetails.jsx'
import Post from './Components/Posts/Post.jsx'
import PostArea from './Components/Postarea/PostArea.jsx'
import ArrorPage from './Components/Arror/ArrorPage.jsx'
const router = createBrowserRouter([

 
{
  path:"/",
  element:<Home></Home>,
  errorElement:<ArrorPage></ArrorPage>,
  children:[
    {
      path: "/header",
      element:<Header></Header>
    },
  
    {
      path: "/about",
    element:<About></About>
    },
    {
      path: "/contact",
      element:<Contact></Contact>
    },
    {
      path: "/users",
      loader: ()=>fetch('https://jsonplaceholder.typicode.com/users'),
      element:<Users></Users>
    },
    {
      path: "/user/:userId",
      loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
      element:<UserDetails></UserDetails>
    },{
      path: "/post",
      loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
      element:<Post></Post>
    },
    {
      path: "/post/:postId",
      loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
      element:<PostArea></PostArea>
    }
    

  ]

}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}

    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
