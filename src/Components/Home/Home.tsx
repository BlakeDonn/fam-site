import { Route } from "react-router-dom";
import { Login } from "../Login/Login";
import { Header } from "../Header/Header";
import "./Home.css";

export const Home: React.FC<any> = () => {
  return (
    <div className="Home">
      <Header />
      <div className="Welcome">
        <h1 className="Message">Hey Fam!</h1>
      </div>
      <div className="Description">
        <article>The Family Site for THE famliy</article>
      </div>
      <Login />
    </div>
  );
};
