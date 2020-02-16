import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthPage from "./pages/Auth";
import LandingPage from "./pages/Landing";
import DataPage from "./pages/Data";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/auth" component={AuthPage} />
        <Route paht="/data" component={DataPage} />
      </Switch>
    </div>
  );
}

export default App;
