import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/fonts.css';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { useRoutes } from "react-router-dom";
import routes_config from "./router/routesConfig";
import { AuthProvider } from "context/context";


const App: React.FC<{}> = () => {
    const routes = useRoutes(routes_config);

    return (
        <div>
            <AuthProvider>
                {routes}
            </AuthProvider>
        </div>
    );
};

export default App;