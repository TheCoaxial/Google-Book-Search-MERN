import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { StoreProvider } from "./utils/GlobalState";
import './App.css';



function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
          <Navbar />
          <Switch>
            <Route exact path="/" component={BookList} />
            <Route exact path="/home" component={Home} />
          </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
