import React from "react";
import { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "routes/Auth";
import Login from "routes/Login";

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Auth />
            </Route>
          </>
        ) : (
          <Route exact path="/">
            <Login />
          </Route>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
