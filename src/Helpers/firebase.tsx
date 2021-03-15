// These samples are intended for Web so this import would normally be
// done in HTML however using modules here is more convenient for
// ensuring sample correctness offline.
import firebase from "firebase/app";
import { LogInFormat } from "./types";
import "firebase/auth";

export const firebaseInit = () => {
   const firebaseConfig = {
      apiKey: "AIzaSyAQmfS69dMcIqXv--f8slkzyTtqTkGSdbU",
      authDomain: "famsite-85f71.firebaseapp.com",
      projectId: "famsite-85f71",
      storageBucket: "famsite-85f71.appspot.com",
      messagingSenderId: "166086443232",
      appId: "1:166086443232:web:b25e2df9e9e13a97579085",
      measurementId: "G-B92YK9Q5Z2",
   };
   firebase.initializeApp(firebaseConfig);
};

export const logOut = () => {
   firebase.auth().signOut();
   localStorage.removeItem("displayName");
   localStorage.removeItem("email");
   localStorage.removeItem("userUID");
};
const signUp = ({ email, password }: LogInFormat): void => {
   firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
         const user = userCredential.user;
         console.log(user)
      })
      .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
      });
};

export const handleLog = (
   event: React.FormEvent<HTMLFormElement>,
   userDetails: LogInFormat
): void => {
   event.preventDefault();
   if (userDetails.signUp) {
      signUp(userDetails);
   } else {
      //logIn(userDetails);
   }
};
