import { Route } from "react-router-dom";
import "./Home.css";

export const Home: React.FC<any> = () => {
  return (
    <div className="Home">
      <div className="Header">
        <h3>Home</h3>
        <h3>About</h3>
        <h3>placeholder</h3>
        <h3>Profile</h3>
        <h3>Support</h3>
      </div>
      <div className="Welcome">Hey Fam!</div>
      <div className="Description">I am the right header</div>
    </div>
  );
};
