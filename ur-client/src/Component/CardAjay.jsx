import React from 'react';
import './style/cardAjay-style.css'



const Card = props => {
    return (
        <div className="cardi" style={{width: "20rem" }}>
            <div class="parent">
                <img class="image1" src={props.img2src} alt="img1" />
                <img class="image2" src={props.imgsrc} alt='img2'/>
            </div>


                <div className="cardbody">
                    <h5 className="cardtitle">{props.cardtitle}</h5>
                    <p className="cardtext">{props.cardtext}</p>
                    <a href={props.link} className=" btn btn-primary">Linkedin</a>

                </div>
        </div>
            );
    
}

export default Card;