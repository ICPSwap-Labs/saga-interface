import { Route, Switch, useLocation } from "react-router-dom";
import Home from "./views/home/index";
import Edit from "./views/home/edit";

export default function Routes() {
  const location = useLocation();

  return (
    <Switch>
      <Route path={["/"]}>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Home} />
          <Route exact path="/edit/:id" component={Edit} />
        </Switch>
      </Route>
    </Switch>
  );
}
