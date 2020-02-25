import * as React from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'
import MyHeaders from '../_services/MyHeaders';

interface PrivateRouteProps extends RouteProps {
    component: any
}

const PrivateRoute = (props: PrivateRouteProps) => {
    const { component: Component, ...rest } = props;
    return <Route
        {...rest}
        render={routeProps => (
            MyHeaders.isAuthenticated ?
                <React.Component {...routeProps} /> :
                <Redirect to="/login" />
        )}
    />
}

export default PrivateRoute