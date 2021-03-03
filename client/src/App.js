import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SearchPage from './searchPage';
import SearchResults from './searchResults';
import DetailedIntronInfo from './detailedInfoPage';
import About from './about';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SearchPage} />
        <Route path="/results/details" component={DetailedIntronInfo} />
        <Route path="/results" component={SearchResults} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  )

}

export default App;
