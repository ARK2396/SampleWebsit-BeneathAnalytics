import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './bottom.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
     faTwitter,
     faFacebook,
     faInstagram,
     faLinkedin

} from '@fortawesome/free-brands-svg-icons';
const Bottom=() =>{ 
    return(
        <footer className="main-footer">
            <div className="container">
                <div className="row">
                    {/*Column1*/}
                    <div className="col">
                        <h4>INDIA OFFICE-HEAD QUATERS</h4>
                        <ul className="list-unstyled">
                            <li>"LEAF" 3rd Floor,Law Garden</li>
                            <li>Near Ellisbridge, Ahemdabad</li>
                            <li>Gujarat,India - 380006</li>
                            <li>Email: info@beneath.co.in</li>
                        </ul>
                    </div>                   
                    {/*Column2*/}
                    <div className="col">
                        <h4>CANADA OFFICE</h4>
                        <ul className="list-unstyled">
                            <li>605,Rosebank Drive</li>
                            <li>Scarborough,ON M1B5Y7, CANADA</li>
                            <li>Email: info@beneath.co.in</li>

                        </ul>
                    </div>
                    {/*Column3*/}
                    <div className="col">
                        <h4>OUR NEWSLETTER</h4>
                        <ul className="list-unstyled">
                            <li>Subscribe to our latest newsletter to</li>
                            <li>stay updated about the innovation</li>
                            <li>heppens at Beneath labs</li>
                            
                            <li>
                                <div class="container" >
                                    <input type="text" placeholder="Email address"></input>
                                    <button type="button" class="btn btn-primary"> Subscribe</button>

                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="social-container">
                        <a href="#" className="social twitter">
                            <FontAwesomeIcon icon={faTwitter} size="2x"/>
                        </a>
                        <a href="#" className="social facebook">
                            <FontAwesomeIcon icon={faFacebook} size="2x"/>
                        </a>
                        <a href="#" className="social instagram">
                            <FontAwesomeIcon icon={faInstagram} size="2x"/>
                        </a> 
                    <a href="#" className="social linkedin">
                            <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                        </a>
                    </div>
                <div className="row">
                    <p className="col-sm">
                        &copy;COPYRIGHT{new Date().getFullYear()} <b>BENEATH ANALYTICS PVT LTD</b>. All Rights Reserved
                    </p>

                </div>

            </div>
    
         </footer>

        


    )
}


export default Bottom