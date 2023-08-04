import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";
import Dashboard from "../Layout/Dashboard";
import Home from "../Pages/Site/Home/Home/Home";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: '/dashboard'
            }
        ]
    }
]) 