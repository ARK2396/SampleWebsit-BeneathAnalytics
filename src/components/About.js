import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import'./about.css'

const About=() =>{ 
    return (
        <div className="about">
        <div className="abg"></div>
        <div className="abg-text">
          <h1>Who Are We</h1>
          
          <h4>Highly professional team of Analyst,Solution Engineers and Consultants</h4>
          <p>Founded in 2019, Beneath Analytics serves multiple industries by following the best development and consulting practices</p>
          <p>We are experts in software development and consulting. Our areas of expertise are -</p>
          <ul className="list-unstyled" id="expertise">
              <li>
              Machine Learning Application development and Consulting
              </li>
              <li>
                  AR-VR Development/Consulting
              </li>
              <li>
                  Block-Chain Solution and Consulting
            </li>
            <li>
                  Deploying n-node architecture in Big Data Pipeline
              </li>
              <li>
                  Building Data-lake and optimizing the Cloud Computing cost
              </li>
              <li>
                  Stand alone responsive web-apps and mobile (IOS/Android) app development
              </li>


                



          
          </ul>
        </div>
        </div>
    )
}
export default About