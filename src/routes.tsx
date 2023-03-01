import { Route, Switch, useLocation } from "react-router-dom";
import Home from "./views/home/index";
import Edit from "./views/home/edit";
import Log from "./views/home/log";

export default function Routes() {
  const location = useLocation();

  return (
    <Switch>
      <Route path={["/"]}>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Home} />
          <Route exact path="/edit/:id" component={Edit} />
          <Route exact path="/log/:id" component={Log} />
        </Switch>
      </Route>
    </Switch>
  );
}
