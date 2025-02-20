


import HomePage from './routes/homepage/homePage/homePage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ListPage from "./routes/homepage/listPage/listPage";
import Layout from "./routes/homepage/layout/layout";
import SinglePage from "./routes/homepage/singlePage/singlePage";
import ProfilePage from "./routes/homepage/profilePage/profilePage";
import Login from "./routes/homepage/login/login";
import Register from "./routes/homepage/register/register";
import ProfileUpdatePage from './routes/homepage/profileUpdatePage/profileUpdatePage';
import NewPostPage from './routes/homepage/newPostPage/newPostPage';
import AboutUs from './routes/homepage/about/about';
import Contact from './routes/homepage/contact/contact';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element:<HomePage/>
        },
        {
          path:"/list",
          element:<ListPage/>
        },
        {
          path:"/property/:id",
          element:<SinglePage/>
        },
        {
          path:"/profile",
          element:<ProfilePage/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        },{
          path:"/profile/update",
          element:<ProfileUpdatePage/>
        },{
          path:"/newpost",
          element:<NewPostPage/>
        },
        {
          path:"/about",
          element:<AboutUs/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path: "*", // Fallback for undefined routes
          element: <div>404 - Page Not Found</div>,
        }
      ]
    }
  ]);

  return (
    

    <RouterProvider router={router}/>
    
  );
}

export default App;


