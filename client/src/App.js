import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Saved from "./pages/SavedList";
import { StoreProvider } from "./utils/GlobalState";
import './App.css';



function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/saved" component={Saved} />
          </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
