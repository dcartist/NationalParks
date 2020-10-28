import React, { Component } from 'react';
import './App.css';
import listOfParks from "./data/parks.json"
import Navigation from "./Navigation"
import Park from "./Park"
import {Route, Link} from "react-router-dom"
import Home from "./Home"
import Parks from "./Parks"
class App extends Component {
  render() {
  
    return (
        <div>
          <Navigation></Navigation>

          <Route path="/" exact render={()=> <Parks {...listOfParks}/>}></Route>
          <Route path="/Parks" component={Home}></Route>
         <Route path="/park/:id" render={parkParam => <Park {...parkParam}/>}></Route>

        </div>
    );
  }
}

export default App;
