import React from 'react';
import { useGoogleAuth } from './googleAuth';

const LoginPage = () => {
    
    const { signIn } = useGoogleAuth();

    return (
        <div>
        <h2> Public Page </h2>
        <button onClick={signIn}>Login</button>
        </div>
    );
};

export default LoginPage;