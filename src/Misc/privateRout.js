import React from "react";
import { Route, Redirect } from "react-router-dom";
import { UserService } from "../3-Services/UserService";
export const PrivateRoute = ({ component: Component , userRole : string  , ...rest }) => {
    
    return(

    <Route {...rest}
        render={({props}) => (
            UserService.isAuthenticated ?
                <Component  {...props} />
                : <Redirect to={{
                    pathname: "/login",
                    //state: { from: props.location }
                  }} />
       )} />


)}