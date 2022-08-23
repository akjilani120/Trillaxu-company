import { useEffect, useState } from "react";
import TitleShow from "./TitleShow";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import {signOut } from 'firebase/auth';
import auth from "./Firebase/firebase.init";
import { useAuthState } from 'react-firebase-hooks/auth';

const LoginPage = () => {

    const [pen, setPen] = useState([])
    const [signInWithGoogle, luser, loading, error] = useSignInWithGoogle(auth);    
    const [user] = useAuthState(auth)
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then(data => setPen(data))
    }, [])
    const hanleGoogle = () => {
        signInWithGoogle()
    }
    const logout = () => {
        signOut(auth);
        alert("Are you went Log")
    };
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    console.log("user data", luser)
    return (
        <div className="login-body">
            <div className="login-header">
                <div className="loging-btn-head">
                    {
                        user ?
                        <div className="input-data-sent">
                        <button className="logout-btn" onClick={logout}>Log Out</button>
                        
                    </div> :
                        <div>
                        <h2>Please Login</h2>
                        <button className="login-btn" onClick={hanleGoogle}>Google Login</button>
                    </div>
                    
                    }
                </div>
            </div>

        </div>
    );
};

export default LoginPage;