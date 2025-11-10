import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home.jsx/Home";
import AllProducts from "../Pages/AllProducts/AllProducts";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ProductsDetails from "../Pages/ProductsDetails/ProductsDetails";


const router = createBrowserRouter([
    {
     path:'/',
     element:<MainLayout></MainLayout>,
     children: [
        {
            index:true,
            element: <Home></Home>
        },
        {
            path:'/all_products',
            element: <AllProducts></AllProducts>
        },
        {
            path:'/product_details' ,
            element: <ProductsDetails></ProductsDetails>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
     ]
    }
])
export default router;