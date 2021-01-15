import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';  

function Nav() {


            const navStyle = {

                color : 'white'
                
                
            };


    


  return(
  <center>
        <nav>
            

            <ul className="nav-links">
                <Link style={navStyle} to="/Search">
                    Search </Link>
                <Link style={navStyle} to="/Upload">

                <li>Upload</li>
                </Link>
               
            </ul>
        </nav>
  </center>
  
    );
}

export default Nav;
