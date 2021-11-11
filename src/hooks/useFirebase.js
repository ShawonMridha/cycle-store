import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword,  GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";


initializeAuthentication();

const useFirebase = () =>{
    const[user, setUser] = useState({});
    const[isLoading, setIsLoading] = useState(true);
    const[authError, setAuthError] = useState('');
    const[admin, setAdmin] = useState(false);


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name,location, history)=>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
            const newUser = {email, displayName: name};
            setUser(newUser)
            const destination = location?.state?.form || '/';
            history.replace(destination)
            // send name after creation
            saveUser(email,name, 'POST');
            updateProfile(auth.currentUser, {
              displayName: name
            }).then(() => {
            }).catch((error) => {
            });
          })
          .catch((error) => {
            setAuthError (error.message);
          })
          .finally(()=> setIsLoading(false));

    }

    const loginUser = (email, password, location, history)=>{
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      const destination = location?.state?.form || '/';
      history.replace(destination)
    setAuthError('');
  })
  .catch((error) => {
    setAuthError (error.message);
  })
  .finally(()=> setIsLoading(false));

    }


    const signInWithGoogle= (location, history)=>{
      setIsLoading(true);
      signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, 'PUT');
        setAuthError('');
        const destination = location?.state?.form || '/';
      history.replace(destination)
      }).catch((error) => {
        setAuthError (error.message);
      })
      .finally(()=> setIsLoading(false));
    }

   //observe user state 
    useEffect(()=>{
     const unsubscribe=  onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
              
            } else {
                setUser({})
              
            }
            setIsLoading(false);
          });
          return ()=> unsubscribe;
    },[])

    useEffect(()=>{
      fetch(`https://guarded-everglades-58080.herokuapp.com/users/${user.email}`)
      .then(res=>res.json())
      .then(data=>setAdmin(data.admin))
    },[user.email])

    const logout=()=>{
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=> setIsLoading(false));
          
    }


    const saveUser = (email, displayName, method) =>{
      const user = {email, displayName};
      fetch('https://guarded-everglades-58080.herokuapp.com/users',{
        method:method,
        headers:{
          'content-type': 'application/json'
        },
        body:JSON.stringify(user)
      })
      .then()
    }

    return{
        user,
        admin,
        isLoading,
        authError,
        registerUser,
        signInWithGoogle,
        loginUser,
        logout,

    }
}

export default useFirebase;