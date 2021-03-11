import Home from "./Components/Home/Home";
import NotFound from "./NotFound/NotFound";
import TeamDetails from "./Components/TeamDetails/TeamDetails";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/team/:id">
            <TeamDetails></TeamDetails>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
