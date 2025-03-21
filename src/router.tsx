import { RouteObject } from "react-router-dom";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import HomePage from "./pages/HomePage";

const router: RouteObject[]=[
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/Login",
        element: <Login />,
    },
    {
        path: "/Register",
        element: <Register/>
    }
];

export default router;