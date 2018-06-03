import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from 'react';
import App from "./App"

const About=()=>{
    return(
        <h1>About</h1>
    )
}

const Routes=props=>{
<Router {...props}>
      <Route exact path="/" component={App} >
          <Route path="/about" component={About} />
      </Route>     
</Router>
}