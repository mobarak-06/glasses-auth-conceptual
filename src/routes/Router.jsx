import { createBrowserRouter } from 'react-router-dom';

import Root from '../Pages/Root'
import Error from '../Pages/Error';
import Home from '../Pages/Home';
import Products from '../Pages/Products';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import ProductsDetails from '../Pages/ProductsDetails';
import PrivateRoute from './PrivateRoute';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children:[
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/products",
          loader: () => fetch("/products.json"),
          element: <Products></Products>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/product/:id",
          element: <PrivateRoute>
            <ProductsDetails></ProductsDetails>
          </PrivateRoute>,
          loader: () => fetch('/products.json')
        },
      ]
      
    },
  ]);

  export default router