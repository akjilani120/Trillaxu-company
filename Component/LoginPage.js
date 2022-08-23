import { useEffect, useState } from "react";
import TitleShow from "./TitleShow";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import {signOut } from 'firebase/auth';
import auth from "./Firebase/firebase.init";
import { useAuthState } from 'react-firebase-hooks/auth';
import TodoData from "./TodoData";

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
        alert("Are you went Log out ?")
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
    const hanldeSubmit =(e) =>{
        e.preventDefault()
       const name = e.target.name.value;
       const phone = e.target.phone.value;
       const address = e.target.address.value;
       

    }
    return (
        <div className="login-body">
            <div className="login-header">
                <div className="loging-btn-head">
                    {
                        user ?
                        <div className="input-data-sent">
                        <button className="logout-btn" onClick={logout}>Log Out</button>
                          <div className="form-body">
                          <form onSubmit={hanldeSubmit}>
                             <div>
                                <p className="input-pera">Your Name</p>
                                <input className="input-control" type="text" name="name"  required />
                             </div>
                             <div>
                                <p className="input-pera">Your Phone Number</p>
                                <input className="input-control" type="text" name="phone" required  />
                             </div>
                             <div>
                                <p className="input-pera">Your Home Adress</p>
                                <input className="input-control" type="text" name="address"  required />
                             </div>
                             <div className="submit-btn-header">
                                <input className="submit-btn" type="submit" value="Submit Now" />
                             </div>
                          </form>

                          </div>
                    </div> :
                        <div>
                        <h2>Please Login</h2>
                        <button className="login-btn" onClick={hanleGoogle}>Google Login</button>
                    </div>
                    
                    }
                </div>
            </div>
           <div>
            <TodoData/>
           </div>
        </div>
    );
};

export default LoginPage;