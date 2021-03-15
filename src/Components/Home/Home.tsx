import { Login } from "../Login/Login";
import { Profile } from "../Profile/Profile";
import { useState } from "react";
import { Header } from "../Header/Header";
import "./Home.css";

export const Home: React.FC<any> = () => {
  const [loggedIn, updateLogin] = useState(false)
  return (
    <div className="Home">
      <Header />
      <div className="Welcome">
        <h1 className="Message">Hey Fam!</h1>
      </div>
      <div className="Description">
        <article>The Family Site for THE famliy</article>
      </div>
      {loggedIn ? <Profile /> : <Login updateLogin={updateLogin} />  }
    </div>
  );
};
