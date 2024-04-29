import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import SingleProduct from "../pages/SingleProduct";
import SignUp from "../pages/SignUp";

import Unauthenticated from "../layouts/Unauthenticated";
import Login from "../pages/Login";
import CheckOut from "../pages/CheckOut";
import Contact from "../pages/Contact";
import { PrivetRoute } from "./PrivetRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: (
          <PrivetRoute>
            <CheckOut />
          </PrivetRoute>
        ),
      },
    ],
  },
  {
    path: "/",
    element: <Unauthenticated />,
    children: [
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
export default router;
