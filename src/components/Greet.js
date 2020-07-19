import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './myStyles.css'
import logo from './logo.jpg';

//function Greet(){
   // return<h1>Hello Ravi</h1> 
//}

const Greet=() =>{ 
    return(
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light sticky">
            <div className="container">
                   
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto navbar-center" id="mySidenav">
                        <div className="logo">
                           <img src={logo} alt="instagram" width ="100" height="90"/>
                        </div>
                        <li className="nav-item">
                            <a href="#" className="nav-link">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link" >ABOUT US</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">SERVICES</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">PRODUCTS</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">TEAM</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">COTACT US</a>
                        </li>
                        
                    </ul>
                </div>


            </div>

        </nav>
        
        
    )
}


export default Greet