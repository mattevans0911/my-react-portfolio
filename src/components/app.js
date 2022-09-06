import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./NavBar";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Footer from "./Footer";

export default class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <Router>
          <NavBar />
          <div className="router-wrapper">
            <Switch>
              <Route exact path="/">
                <About />
              </Route>

              <Route path="/projects">
                <Projects />
              </Route>

              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
          </div>
          <Footer />
        </Router>
      </div>
    );
  }
}
