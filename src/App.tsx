import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box } from "@mui/material";
import { Routes, useRoutes, Outlet, RouteObject } from "react-router-dom";
import { useAppSelector } from "./hooks/useRedux";
import { RootState } from "./store/store";
import route from "./routes/routes";

function App() {
  const token = useAppSelector((state: RootState) => state.Auth.token);
  console.log(route);
  const routeArray: RouteObject[] = route.map((item) => {
    if (item.children && !token)
      item["children"] = item.children.filter((x: any) => x.protected !== true);

    if (!item.protected || (item.protected && token)) {
      return item;
    }
  });
  const routes = useRoutes(routeArray);
  return routes;
}

export default App;
