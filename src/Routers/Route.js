import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Notfound from "../sherd/Notfound/Notfound";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");
const { default: Home } = require("../pages/Homes/Home/Home");

const router =createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path: '*',
                element: <Notfound></Notfound>
                
                }
        ]
    }


])

export default router;