import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/fonts.css';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { useRoutes } from "react-router-dom";

import routes_config from "./router/routesConfig";


const App: React.FC<{}> = () => {
    const routes = useRoutes(routes_config);

    return (
        <div>
            {routes}
        </div>
    );
};

export default App;