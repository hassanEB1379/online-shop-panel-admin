import  React from  "react";
import { Route, Redirect } from  "react-router-dom";

const  PrivateRoute= ({path , exact , component , to }) => {

    const condition = localStorage.getItem('token')!== null;

    return  condition ? (<Route  path={path}  exact={exact} component={component} />) : 
        (<Redirect  to={to}  />);
};
export  default  PrivateRoute;