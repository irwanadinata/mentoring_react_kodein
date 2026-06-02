import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "../pages/Home"
import Profile from "../pages/Profile"
import Contact from "../pages/Contact";
import Huhuh from "../pages/not-found";
import Delete from "../pages/delete";

export default function Router () {
    const router = createBrowserRouter([
        {
            path : "*",
            element : <Huhuh/> 
        },
        {
            path : "/",
            element: <Home/>
        },
        {
            path: "/profile",
            element: <Profile/>
        },
        {
            path: "/contact",
            element: <Contact/>
        },
        {
            path: "/delete",
            element: <Delete/>
        }
    ])

    return <RouterProvider router = {router}/>
}