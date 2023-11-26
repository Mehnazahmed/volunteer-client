import axios from "axios";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase.config";

const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);
  const [authError, setAuthError] = useState("");

  
  //sign in
  const registerWithEmailAndPassword = async (name, email, password,navigate) => {
    try {
      setUserLoading(true);
      setAuthError("");

      await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(auth.currentUser, {
        displayName: name,
      });
      navigate("/");
    } catch (error) {
      setAuthError(error.message);
    } finally {
      setUserLoading(false);
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
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        axios.post('http://localhost:5000/jwt',{email:user.email})
        .then(data =>{
          console.log(data.data);
          //set acess token
          localStorage.setItem('access-token',data.data.token);
          setUserLoading(false);
        })
      } else {
        setUser(null);
        localStorage.removeItem('access-token')
      }
      
    });
    return () => unSubscribe;
  }, [auth]);

  return {
    user,
    userLoading,
    authError,
    registerWithEmailAndPassword,
    loginWithEmailAndPassword,
    logOutUser,

  };
};

export default useFirebase;
