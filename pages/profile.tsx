import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { Auth } from "aws-amplify";
import { useState, useEffect } from 'react';

function Profile() {
    const [user, setUser] = useState(null);
    async function checkUser() {
        const user = await Auth.currentAuthenticatedUser();
        setUser(user);
    }

    useEffect(()=> {
        checkUser();
    }, []);

    if(!user) return null;
    return (
        <div>
            <h1>Profile</h1>
            <h3>User: {user.username}</h3>
            <p>Email: {user.attributes.email}</p>
            <AmplifySignOut></AmplifySignOut>
        </div>
    )
}

export default withAuthenticator(Profile);