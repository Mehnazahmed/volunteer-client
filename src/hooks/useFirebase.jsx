import axios from "axios";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase.config";

const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);
  const [authError, setAuthError] = useState("");


  const updateUser =(name)=>{
    return  updateProfile(auth.currentUser,{
     displayName: name
    })
 };


  
  //sign in
  const createUser = async ( email, password) => {
    try {
      setUserLoading(true);
      setAuthError("");

      await createUserWithEmailAndPassword(auth, email, password);

      // await updateProfile(auth.currentUser, {
      //   displayName: name,
      // });
      
    } catch (error) {
      setAuthError(error.message);
    } 
  };
  //login user
  const loginWithEmailAndPassword = async (email, password, location,navigate) => {
    try {
      setUserLoading(true);
      setAuthError("");

      await signInWithEmailAndPassword(auth, email, password);
      console.log("Location state from:", location?.state?.from);

      // location?.state?.from ? navigate(location.state.from.pathname)
      //   : navigate("/");
    } catch (error) {
      if (error.message.includes("auth/user-not-found")) {
        setAuthError("No user found with this email 😟");
      } else if (error.message.includes("auth/wrong-password")) {
        setAuthError("Wrong password 😟");
      } else {
        setAuthError(error.message);
      }
    } finally {
      setUserLoading(false);
    }
  };

  //logout
  const logOutUser = () => {
    signOut(auth).then(() => {
      console.log("logout");
    });
  };

  //observer
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,currentUser=>{
     setUser(currentUser);
     console.log('current-user',currentUser)
     //get & set token using axios post
     if(currentUser){
       axios
         .post("http://localhost:5000/jwt",{email:currentUser.email})
         .then(data => {
           console.log(data.data.token)
           //set access token to local storage
           localStorage.setItem('access-token',data.data.token)
           setUserLoading(false);
         })
         .catch(err => console.error(err));
     }
     //remove token while loging out
     else{
       localStorage.removeItem('access-token')
     }

     
    });
    return () =>unSubscribe();
   },[]);

  return {
    user,
    userLoading,
    updateUser,
    authError,
    createUser,
    loginWithEmailAndPassword,
    logOutUser,

  };
};

export default useFirebase;
