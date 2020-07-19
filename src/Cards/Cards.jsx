import React, { Component } from 'react'
import Card from './CardUI';
import about from"../assets/about.jpg";
import back from"../assets/back.jpg";
import business from"../assets/business.jpg";

 class Cards extends Component {
     
     
     
    render() {
        return (
            
            
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={back}title="Big Data Analytics" text="We Provide the best practices analytics for big data. The data speaks more, and we help to get valuable insights for your business"/>
                        
                    </div>
                    <div className="col-md-4">
                    <Card imgsrc={business}title="AL Integration" text="The products much be smart to learn from the previous historical data.Customized algorithms can add more power to your products."/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={about}title="Automation" text="We don't do repetative tasks as we dont let our customer do the same. The magic of coding happens here where we automate stuff."/>
                    
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={back}title="Business Consulting" text="Our areas of experting are just technology bound. We are having great consultant's who can help you drive your business carzy"/>
                        
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={back}title="AR-VR Development" text="The world is moving on AR-VR technologies and we make things happen for a real time experience by developing such wonderful applications"/>
                        
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={back}title="Predective Analysis" text="Your data speaks more than you know! It has product to tell how your product/service will perform in upcoming days"/>
                        
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Cards
