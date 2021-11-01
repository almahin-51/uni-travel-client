import { onAuthStateChanged, getAuth, signInWithPopup, GoogleAuthProvider, signOut, GithubAuthProvider, createUserWithEmailAndPassword, sendEmailVerification, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import swal from 'sweetalert';


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    
    const auth = getAuth();
    const githubProvider = new GithubAuthProvider();
    const googleProvider = new GoogleAuthProvider();

    //sign In With google
    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // get name
    const getName = (e) => {
        setName(e?.target?.value);
    };
    // get email
    const getEmail = (e) => {
        setEmail(e?.target?.value);
    };
    // get password
    const getPassword = (e) => {
        setPassword(e?.target?.value);
    };
    
    const handleRegistration = () => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
        
    }

    
    //signInWithEmailAndPassword
    const handleSignIn = () => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    //signInWithGithub
    const signInUsingGithub = () => {
        setIsLoading(true);
        return signInWithPopup(auth, githubProvider);
            
    }

    // sendVilifiedEmail
    function sendVerifiedEmail() {
        sendEmailVerification(auth.currentUser)
            .then((result) => {
            alert(
                `Please verify your email, a verification email has been sent to ${ email }`
            );
        });
    }
    // update name and email
    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name,
        })
            .then((result) => { })
            .catch (error => {
            setError(error.message)
            })

    };


    // observe user state change 
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth]);

    const logOut = () => {
        setIsLoading(true);
        swal({
            title: "Are you sure?",
            text: "You want to logOut?",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("You are successfully logOut.", {
                        icon: "success",
                    });
                    signOut(auth)
                        .then(() => {

                        })
                        .finally(() => setIsLoading(false))
                } else {
                    swal("Stay LogIn?");
                }
            }); 
    }

    
    return {
        user,
        isLoading,
        signInUsingGoogle,
        signInUsingGithub,
        logOut,
        email,
        password,
        name,
        error,
        getPassword,
        getName,
        getEmail,
        handleRegistration,
        sendVerifiedEmail,
        setUserName,
        handleSignIn,
        setError,
        setIsLoading,
        setName,
        setUser
    }
}

export default useFirebase; 