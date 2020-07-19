import React from 'react';

import"./card-style.css"


const Card=props=>{
    return(
        <div className="card text-center">
            <div className="overflow">
    
            </div>
            <div className="card-body ext-dark">
                <h4 className='card-title'>{props.title}</h4>
                <p className="card-text text-secondary">
                    {props.text}
                </p>
                
            </div>


        </div>
    );

}
export default Card;