import React from 'react';
import firebase from "firebase/app";
import { useContext } from 'react';
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { handleSignIn } from './LoginManager';
import './LogIn.css'


const LogIn = () => {
    const [user, setUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    const ghProvider = new firebase.auth.GithubAuthProvider();

    const signIn = (user, provider) => {
        handleSignIn(user, provider)
        .then(res => {
            setUser(res)
            history.replace(from);
        })
    }
    return (
        <>
        <div className="col-md-3 mx-auto logIn mt-5">
            <h2 className="formHeader">LogIn</h2>
            <button className="googleBtn" onClick={() => signIn(user, googleProvider)}>Sign in with google</button>
            <button className="facebookBtn" onClick={() => signIn(user, fbProvider)}>Sign in with facebook</button>
            <button className="githubBtn" onClick={() => signIn(user, ghProvider)}>Sign in with github</button>
        </div>
        <p className="text-center text-danger mt-5">{user.error}</p>
        </>
    );
};

export default LogIn;