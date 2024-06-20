import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";
import Newmenu from "../pages/NewMenu/Index.jsx";
import Editmenu from "../pages/EditMenu.jsx";
import Pic from "../pages/prototype/Pic.jsx";
import User from "../pages/prototype/User.jsx";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute.jsx";

export const routeList = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },

  {
    path: "/pic",
    element: <Pic />,
  },
  {
    path: "/user",
    element: <User />,
  },

  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "/newmenu",
    element: (
      <ProtectedRoute>
        <Newmenu />
      </ProtectedRoute>
    ),
  },
  {
    path: "/editmenu/:id",
    element: (
      <ProtectedRoute>
        <Editmenu />
      </ProtectedRoute>
    ),
  },
]);
