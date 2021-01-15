import React, {useState} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import validator from 'react-validation';
import Nav from './Nav';
import Upload from "./Upload";
import Search from "./Search";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/*
const required = (value) => {
  if (!value.toString().trim().length) {
    // We can return string or jsx as the 'error' prop for the validated Component
    return 'require';
  }
};*/
 

function App() {
  
  






  return (

        



    <div>

            <Router>
            <div>
    
            <Nav />
            <Switch>
              <Route path="/Search" component={Search}/>
                          <Route path="/Upload" component={Upload} />
    
            </Switch>
   
   

              </div>      
              </Router>

</div>

    
      
      
  );
}

export default App;
