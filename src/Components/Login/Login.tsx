import "./Login.css";
import {handleLog} from "../../Helpers/firebase";
import { useState, useEffect } from "react";
import { firebaseInit } from "../../Helpers/firebase";

export const Login: React.FC<any> = () => {
  useEffect(()=>{
   firebaseInit()
  },[])
  const [userDetails, setUserDetails] = useState({ email: "", password: "" , signUp:false});
  const updateDetails = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUserDetails({ ...userDetails, [event.target.type]: event.target.value });
  };
  return (
    <form onSubmit={(event) =>handleLog(event, userDetails)}className="Login">
      <input
        type="email"
        placeholder="Please enter your email"
        onChange={updateDetails}
        value={userDetails.email}
      />
      <input
        type="password"
        placeholder="Please enter your password"
        onChange={updateDetails}
        value={userDetails.password}
      />
      <div className="Sign-buttons">
        <button name="up">Log IN</button>
        <button onClick={()=>setUserDetails({...userDetails, signUp:true})} name="in">Sign IN</button>
      </div>
    </form>
  );
};
