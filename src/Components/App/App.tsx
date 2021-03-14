import { Route } from "react-router-dom";
import { Home } from "../Home/Home";

export const App: React.FC<any> = () => {
  return (
    <div className="App">
      <header className="">
        <Route exact path="/" component={Home} />
      </header>
    </div>
  );
};
