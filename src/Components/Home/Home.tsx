
import { Route } from "react-router-dom";
import "./Home.css";

export const Home:React.FC<any> = () => {
  return (
    <div className="Home">
      <div className="Left-Header">I am the left header</div>
      <div className="Right-Header">I am the right header</div>
    </div>
  );
};
