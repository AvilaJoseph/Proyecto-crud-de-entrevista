import { RouteObject } from "react-router-dom";
import Login from "./components/Auth/Login/Login";

const router: RouteObject[]=[
    {
        path: "/Login",
        element: <Login />,
    }
];

export default router;