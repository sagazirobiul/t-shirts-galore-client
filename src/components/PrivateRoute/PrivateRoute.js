import React from 'react';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [ user ] = useContext(UserContext);
    const eamil = localStorage.getItem('email')

    return(
        <Route
            {...rest}
            render={({ location }) =>
                user.email || eamil ? (
                children
                ) : (
                <Redirect
                    to={{
                    pathname: "/login",
                    state: { from: location }
                    }}
                />
                )
            }
        />
    )
};

export default PrivateRoute;