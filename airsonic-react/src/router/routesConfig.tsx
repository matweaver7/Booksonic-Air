import { RouteObject } from "react-router-dom";
import public_routes from "./publicRoutes";
import protected_routes from "./protectedRoutes";

const routes_config: RouteObject[] = [
    ...public_routes,
    ...protected_routes
];
  
export default routes_config;