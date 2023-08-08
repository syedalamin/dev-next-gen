import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";
import Dashboard from "../Layout/Dashboard";
import Home from "../Pages/Site/Home/Home/Home";
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";
import DashboardBanner from "../Pages/Dashboard/DashboardBanner/DashboardBanner";
import DashboardCompany from "../Pages/Dashboard/DashboardCompany/DashboardCompany";
import DashboardTeamVideo from "../Pages/Dashboard/DashboardTeamVideo/DashboardTeamVideo";
import DashboardWorkService from "../Pages/Dashboard/DashboardWorkService/DashboardWorkService";
import DashboardClientReview from "../Pages/Dashboard/DashboardClientReview/DashboardClientReview";
import DashboardAwards from "../Pages/Dashboard/DashboardAwards/DashboardAwards";
import DashboardSomeProjects from "../Pages/Dashboard/DashboardSomeProjects/DashboardSomeProjects";
import Contact from "../Pages/Site/Contact/Contact";
import About from "../Pages/Site/About/About/About";
import DashboardAboutBanner from "../Pages/Dashboard/DashboardAboutBanner/DashboardAboutBanner";
import DashboardOurTeam from "../Pages/Dashboard/DashboardOurTeam/DashboardOurTeam";
import DashboardOurOffice from "../Pages/Dashboard/DashboardOurOffice/DashboardOurOffice";
import ProductShowcase from "../Pages/Site/ProductShowcase/ProductShowcase/ProductShowcase";
import DashboardProductShowcase from "../Pages/Dashboard/DashboardProductShowcase/DashboardProductShowcase";
import Blog from "../Pages/Site/Blog/Blog/Blog";
import DashboardBlog from "../Pages/Dashboard/DashboardBlog/DashboardBlog";
import DetailsBlog from "../components/DetailsBlog/DetailsBlog";


export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/productshowcase',
                element: <ProductShowcase></ProductShowcase>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/blog/:url',
                element: <DetailsBlog></DetailsBlog>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
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
            },
            {
                path: 'workservice',
                element: <DashboardWorkService></DashboardWorkService>
            },
            {
                path: 'clientreview',
                element: <DashboardClientReview></DashboardClientReview>
            },
            {
                path: 'awards',
                element: <DashboardAwards></DashboardAwards>
            },
            {
                path: 'someproject',
                element: <DashboardSomeProjects></DashboardSomeProjects>
            },
            {
                path: 'aboutbanner',
                element: <DashboardAboutBanner></DashboardAboutBanner>
            },
            {
                path: 'ourteam',
                element: <DashboardOurTeam></DashboardOurTeam>
            },
            {
                path: 'ouroffice',
                element: <DashboardOurOffice></DashboardOurOffice>
            },
            {
                path: 'productshowcase',
                element: <DashboardProductShowcase></DashboardProductShowcase>
            },
            {
                path: 'blog',
                element: <DashboardBlog></DashboardBlog>
            }
        ]
    }
]) 