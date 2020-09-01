import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Redirect,
} from "react-router-dom";

//import page


//import Components
import Navbar from "./Components/Navbar";

function App() {
    return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" />
      </Switch>
    </Router>
);
}

export default App;
