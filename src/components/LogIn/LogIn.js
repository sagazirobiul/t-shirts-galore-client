import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../Config/firebaseConfig';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';


if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
const LogIn = () => {
    const [user, setUser] = useContext(UserContext)
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const handleSignIn = () => {
        firebase.auth()
        .signInWithPopup(googleProvider)
        .then((result) => {
            var user = result.user;
            const newUser = {
                name: user.displayName,
                email: user.email
            }
            setUser(newUser)
            history.replace(from);
        }).catch((error) => {
            var errorMessage = error.message;
        });
    }
    return (
        <div>
            <h2><Link to="/">T-Shirts Galore</Link></h2>
            <button onClick={handleSignIn}>Sign in with google</button>
        </div>
    );
};

export default LogIn;