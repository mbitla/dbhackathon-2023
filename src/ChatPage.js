import React from 'react';
import { useGoogleAuth } from './googleAuth';

const ChatPage = () => {
    const { signOut } = useGoogleAuth();

    return (
    <div>    
        <h2>Private Page</h2>
        <button onClick={signOut}>Logout</button>
        </div>
    );
};

export default ChatPage;