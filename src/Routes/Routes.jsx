import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";

import AllProducts from "../Pages/AllProducts/AllProducts";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ProductsDetails from "../Pages/ProductsDetails/ProductsDetails";
import ErrorElemet from "../Pages/ErrorElement/ErrorElemet";
import MyImport from "../Pages/MyImport/MyImport";
import MyProducts from "../Pages/Myproducts/Myproducts";
import PrivetRoute from "../Context/PrivetRoute";
import ErrorElement from "../Pages/ErrorElement/ErrorElemet";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorElement></ErrorElement>,
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/all_products",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "/my_import",
        element: (
          <PrivetRoute>
            <MyImport></MyImport>
          </PrivetRoute>
        ),
      },
      {
        path: "/my_products",
        element: (
          <PrivetRoute>
            <MyProducts></MyProducts>
          </PrivetRoute>
        ),
      },
      {
        path: "/product_details/:id",
        element: (
          <PrivetRoute>
            <ProductsDetails />
          </PrivetRoute>
        ),
        loader: async ({ params }) => {
          try {
            const res = await fetch(
              `https://export-import-sever.vercel.app/products/${params.id}`
            );
            if (!res.ok) {
              return null;
            }
            const data = await res.json();
            return data;
          } 
          catch (error) {
            return null;
          }
        },
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
]);
export default router;
