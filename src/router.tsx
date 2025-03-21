import React from "react";
import { Router, RouteObject } from "react-router-dom";
import Login from "./components/Auth/Login/Login";

const router: RouteObject[]=[
    {
        path: "/",
        element: <Login />,
    }
];

export default router;