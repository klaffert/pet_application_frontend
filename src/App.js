import React from "react";
import Filters from "./components/Filters";
import PetBrowser from "./components/PetBrowser";
import Favorites from "./components/Favorites"
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route } from "react-router-dom";


import "./App.css";

class App extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <div className="App">
        <Router>
          <Route path= '/' component={NavBar}/>
          <Route exact path="/" component={Login} /> 
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/favorites" render={(props) => <Favorites {...props}/>}/>
          <Route exact path="/pets" component={PetBrowser} />
          <Route exact path="/pets" component={Filters} />
        </Router>
      </div>
    );
  }
}

export default App;
