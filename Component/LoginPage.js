import { useEffect, useState } from "react";
import TitleShow from "./TitleShow";
import { useSignInWithGoogle, signOut } from 'react-firebase-hooks/auth';
import auth from "./Firebase/firebase.init";

const LoginPage = () => {
    const [pen, setPen] = useState([])
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
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
    console.log("user data", user)
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