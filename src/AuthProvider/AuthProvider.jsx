import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

// for all user
// import {
//   getFirestore,
//   collection,
//   getDocs,
//   doc,
//   setDoc,
// } from "firebase/firestore";

// const db = getFirestore(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  // checking user is in or not
  const [user, setUser] = useState(null);

  // for all user
  //   const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  //user create
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   login

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   logout
  const logout = () => {
    return signOut(auth).then(() => setUser(null));
  };

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Log user sign-in
  //   const logUserSignIn = async (currentUser) => {
  //     if (currentUser) {
  //       const userRef = doc(db, "userAuth", currentUser.uid);
  //       await setDoc(
  //         userRef,
  //         {
  //           uid: currentUser.uid,
  //           email: currentUser.email,
  //           displayName: currentUser.displayName,
  //         },
  //         { merge: true }
  //       );
  //     }
  //   };

  // Fetch all users from Firestore
  //   const fetchUsers = async () => {
  //     const usersCollection = collection(db, "userAuth");
  //     const usersSnapshot = await getDocs(usersCollection);
  //     const usersList = usersSnapshot.docs.map((doc) => doc.data());
  //     setUsers(usersList);
  //   };

  // Checking login or not
  //   useEffect(() => {
  //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //       setUser(currentUser);
  //       setLoading(false);
  //       if (currentUser) {
  //         logUserSignIn(currentUser); // Log user sign-in
  //         fetchUsers(); // Fetch users if logged in
  //       }
  //     });
  //     return () => {
  //       return unsubscribe();
  //     };
  //   }, []);

  //   checking login or not

  useEffect(() => {
    const unscubcribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
        console.log(currentUser);
      } else {
        setLoading(false);
      }
    });
    return () => {
      return unscubcribe();
    };
  }, []);

  const authInfo = {
    user,
    googleLogin,
    createUser,
    signIn,
    logout,
    loading,
    // users,
  };
  return (
    <AuthContext.Provider value={authInfo}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
