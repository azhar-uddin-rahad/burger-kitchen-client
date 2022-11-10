import CheckOut from "../pages/CheckOut/CheckOut";
import ServiceDetails from "../pages/Homes/Serviced/ServiceDetails";
import Services from "../pages/Homes/Serviced/Services";
import Login from "../pages/Login/Login";
import Order from "../pages/Order/Order";
import Register from "../pages/Register/Register";
import Notfound from "../sherd/Notfound/Notfound";
import PrivateRouter from "./PrivateRouter";

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
                path:'/services',
                element: <Services></Services>
            },
            
                {
                    path:'/servicedetails/:id',
                    element: <ServiceDetails></ServiceDetails>,
                    loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
                },
              
                {
                    path:'/order',
                    element: <PrivateRouter><Order></Order></PrivateRouter>
                    
                },
            
            {
                path: '*',
                element: <Notfound></Notfound>
                
                }
        ]
    }


])

export default router;