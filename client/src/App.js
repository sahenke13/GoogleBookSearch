import React, { Component } from "react";
import{BrowserRouter, Route} from  'react-router-dom';
import NavTabs from "./components/NavTabs/NavTabs";


import "./App.css";

class App extends Component {
  render() {
    return(
      <BrowserRouter>
      <NavTabs />
      <h1>Test</h1> 
      </BrowserRouter>
    )
  }
}

export default App;
