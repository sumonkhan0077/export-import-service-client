import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home.jsx/Home";
import AllProducts from "../Pages/AllProducts/AllProducts";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ProductsDetails from "../Pages/ProductsDetails/ProductsDetails";
import ErrorElemet from "../Pages/ErrorElement/ErrorElemet";
import MyImport from "../Pages/MyImport/MyImport";
import MyProducts from "../Pages/Myproducts/Myproducts";
import PrivetRoute from "../Context/PrivetRoute";
import ErrorElement from "../Pages/ErrorElement/ErrorElemet";


const router = createBrowserRouter([
    {
     path:'/',
     errorElement:<ErrorElement></ErrorElement>,
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
            path:'/my_import',
            element:<PrivetRoute>
                <MyImport></MyImport>
            </PrivetRoute>
        },
        {
            path:'/my_products',
            element:<PrivetRoute>
                  <MyProducts></MyProducts>
            </PrivetRoute> 
        },
        {
            path:'/product_details/:id' ,
            loader:({params} ) => fetch(`http://localhost:3000/products/${params.id}`),
            element: <PrivetRoute>
                 <ProductsDetails></ProductsDetails>
            </PrivetRoute>
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