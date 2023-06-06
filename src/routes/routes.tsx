import { DataRouteObject, Outlet, RouteObject } from "react-router-dom";
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
        index: true,
        Component: Home,
      },
      {
        path: "/home",
        Component: Home,
      },
    ],
  },

  {
    path: "/login",
    Component: Login,
    protected:true 
  },
];

export default route;
