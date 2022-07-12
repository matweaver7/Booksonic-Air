import ROUTES from "constants/routes";
import Homepage from "pages/Homepage";
import { RouteObject } from "react-router-dom";

const protected_routes: RouteObject[] = [
    { 
        path: ROUTES.home, 
        element:<Homepage />,
    }
];

export default protected_routes;