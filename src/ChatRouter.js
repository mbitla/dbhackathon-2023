import React from 'react';
import { Route, Navigate} from 'react-router-dom';
import { useGoogleAuth } from "./googleAuth";

const ChatRoute = ({component: Component, ...rest}) => {

    const { isSignedIn } = useGoogleAuth();

    return (
        <div>
            <Route {...rest} render={props => (
                isSignedIn ?
                <Component {...props} />: 
                <Navigate exact from="/chat" to="/" />
            )} />
        </div>
    );
};

export default ChatRoute;