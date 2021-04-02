import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../Config/firebaseConfig';


if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export const handleSignIn = (user, provider) => {
    return firebase.auth().signInWithPopup(provider)
    .then((result) => {
        var user = result.user;
        const newUser = {
            name: user.displayName,
            email: user.email
        }
        return newUser
    }).catch((error) => {
        const newUserInfo = {...user};
        newUserInfo.error = error.message;
        return newUserInfo;
    });
}