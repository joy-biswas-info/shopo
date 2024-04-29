import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import SingleProduct from "../pages/SingleProduct";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "/products/:id",
        element: <SingleProduct />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
export default router;
