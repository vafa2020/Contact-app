import { Switch, Route } from "react-router-dom";
import { Routs } from "./Routs";
const Routing = () => {
  return (
    <Switch>
      {Routs.map((routs, index) => (
        <Route key={index} {...routs} />
      ))}
    </Switch>
  );
};

export default Routing;
