import { createBrowserRouter } from "react-router";
import MainLayout from '../layouts/MainLayout'
import Home from "../pages/Home";
import Register from "../pages/Register";
import Post from "../pages/Post";


const router = createBrowserRouter ([
    {
        path:"/",
        element: <MainLayout />,
        children:[
            {
                index:true,
                element:<Home />,
            },
            {
                path:"register",
                element:<Register/>,
            },
            {
                 path:"post",
                element:<Post/>,
            },
        ]
    },
]);

export default router;