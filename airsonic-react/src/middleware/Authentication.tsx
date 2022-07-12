// import React, {useState} from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import { Route } from "react-router-dom";

// function useAuth() {
//     return useContext(authContext);
// }


// const PrivateRoute: React.FC<{}> = (children, ...rest) => {
//     let auth = useAuth();
//     return (
//         <Route
//             {...rest}
//             render={({ location }) =>
//                 auth.user ? (
//                 children
//                 ) : (
//                 <Redirect
//                     to={{
//                     pathname: "/login",
//                     state: { from: location }
//                     }}
//                 />
//                 )
//             }
//         />
//     );
// };

// export default Homepage;

// let AuthContext = React.createContext<AuthContextType>(null!);

// function RequireAuth({ children }: { children: JSX.Element }) {
//     let auth = useAuth();
//     let location = useLocation();
  
//     if (!auth.user) {
//       // Redirect them to the /login page, but save the current location they were
//       // trying to go to when they were redirected. This allows us to send them
//       // along to that page after they login, which is a nicer user experience
//       // than dropping them off on the home page.
//       return <Navigate to="/login" state={{ from: location }} replace />;
//     }
  
//     return children;
//   }