import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function ProtectedRoute({ user, loggedInPath, children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({location}) => {
                if (user) {
                    return children;
                }
                
                if (!user) {
                    return (
                        <Redirect
                            to={{
                                pathname: loggedInPath,
                                state: {from: location}
                            }}
                        />
                    );
                }
                
                return null;
            }}
        />
    );
}