import {useEffect, useState} from "react";
import {FacebookAuthProvider, onAuthStateChanged, signInWithPopup, signOut} from "firebase/auth";
import {auth} from "../../firebase/firebase-config.js"


export const useLoginWithFacebook = () => {
    //setup login, popup, logout
    const [error, setError] = useState();
    //pending
    const [pending, setIsPending] = useState(false);
    //data (user credential)
    const [user, setUser] = useState(null);
    //create provider
    const provider = new FacebookAuthProvider();

    //useEffected tracking on user creditial
    useEffect(() => {
        const unsubcriber = onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user);
            }else{
                throw new Error("unsubcriber user");
            }
        })
        return () => unsubcriber();
    },[])
    //setup login with GitHub
    const LoginWithFacebook = async () => {
        setIsPending(true);
        try {
            const res = await signInWithPopup(auth,provider);
            if(!res){
                throw new Error("login unsuccessfully");
            }
            const user = res.user;
            console.log("Facebook Info", user);
            setIsPending(false);
        }catch(error){
            setError(error);
            console.log(error.message);
            setIsPending(false);
        }
    }
    //logout features
    const FacebookLogout =async () =>{
        setIsPending(false);
        setError(null);
        try {
            await signOut(auth);
            setIsPending(true);
            console.log("Logout successfully");
        }catch{
            setError(error);
            console.log(error.message);
            setIsPending(false);
        }
    }
    return{ LoginWithFacebook, FacebookLogout, pending,error,user};
}