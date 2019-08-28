import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import Dashboard from "./Component/Dashboard";
import MaterialEntry from "./Component/MaterialEntry";
import Navbar from "./Component/Navbar-Header";
import Sidebar from "./Component/Sidebar";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Route path="/" component={MaterialEntry} />
        </Router>
      </div>
    );
  }
}
