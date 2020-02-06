import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Postpickups from "./pages/Postpickups";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
import Availablejobs from "./pages/Availablejobs";
import Currentjobs from "./pages/Currentjobs";
import Pagenotfound from "./pages/Pagenotfound";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home}/>
          <PrivateRoute path="/postpickups" component={Postpickups} />
          <PrivateRoute path="/jobs" component={Availablejobs} />
          <PrivateRoute path="/currentjobs" component={Currentjobs} />
          <Route component={Pagenotfound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;