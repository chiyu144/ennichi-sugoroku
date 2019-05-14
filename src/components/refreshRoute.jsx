import React from "react";

import { Route, Redirect } from "react-router-dom";

const RefreshRoute = ({ component: Component, spin, ...rest }) => (
    <Route
        {...rest}
        render = { props =>
            spin ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: "/intro" }} />
            )
        }
    />
);

export default RefreshRoute;