import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { view as Contact } from "./contact";
import { view as ContactDetail } from "./contactDetail";

const ContactApp = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/contact" />
        </Route>
        <Route path="/contact" component={Contact} />
        <Route path="/detail" component={ContactDetail} />
      </Switch>
    </Router>
  );
};

export default ContactApp;
