import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";
import Dashboard from "../Layout/Dashboard";
import Home from "../Pages/Site/Home/Home/Home";
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";
import DashboardBanner from "../Pages/Dashboard/DashboardBanner/DashboardBanner";
import DashboardCompany from "../Pages/Dashboard/DashboardCompany/DashboardCompany";
import DashboardTeamVideo from "../Pages/Dashboard/DashboardTeamVideo/DashboardTeamVideo";

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
                path: '/dashboard',
                element: <DashboardHome></DashboardHome>
            },
            {
                path: 'banner',
                element: <DashboardBanner></DashboardBanner>
            },
            {
                path: 'company',
                element: <DashboardCompany></DashboardCompany>
            },
            {
                path: 'teamvideo',
                element: <DashboardTeamVideo></DashboardTeamVideo>
            }
        ]
    }
]) 