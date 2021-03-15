import { Route } from "react-router-dom";
import "./Home.css";

export const Home: React.FC<any> = () => {
  return (
    <div className="Home">
      <div className="Header">
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Placeholder</h3>
        <h3>Profile</h3>
        <h3>Support</h3>
      </div>
      <div className="Welcome">
        <h1 className="Message">Hey Fam!</h1>
      </div>
      <div className="Description">
        <article>The Family Site for THE famliy</article>
      </div>
      <div className="Login-form">
        <article>The Family Site for THE famliy</article>
      </div>
    </div>
  );
};
