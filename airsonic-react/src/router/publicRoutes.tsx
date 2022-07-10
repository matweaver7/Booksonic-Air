import AccessDenied from "pages/AccessDenied";
import Homepage from "pages/Homepage";
import Login from "pages/Login";
import { RouteObject } from "react-router-dom";
import ROUTES from "constants/routes";
import Recover from "pages/Recover";
import protected_routes from "./protectedRoutes";

const public_routes: RouteObject[] = [
    { 
        path: ROUTES.home, 
        element:<Homepage /> 
    },
    { 
        path: ROUTES.accessDenied, 
        element:<AccessDenied /> 
    },
    { 
        path: ROUTES.login, 
        element:<Login /> 
    },
    { 
        path: ROUTES.recover, 
        element:<Recover /> 
    },
];

export default public_routes;