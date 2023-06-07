import {
  DataRouteObject,
  Navigate,
  Outlet,
  RouteObject,
  redirect,
} from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";

const route: any[] = [
  {
    path: "/",
    element: (
      <div>
        heder
        <Outlet />
        footer
      </div>
    ),
    children: [
      {
        path: "/home",
        Component: Home,
        protected: true,
      },
    ],
  },

  {
    path: "/login",
    Component: Login,
  },
  {
    path: "*",
    Component: Login,
    
  },
];

export default route;
