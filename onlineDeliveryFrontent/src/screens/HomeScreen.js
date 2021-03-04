import React from 'react';
import sushi from '../images/backgroundImage.jpg';
import shop from '../images/shop.jpg';
import aboutus from '../images/aboutus.jpg';
import menu from '../images/ourmenu.jpg';

export default function HomeScreen (){
    return (
        <div className="main-container">
            <div className="image">
                <div className="image-button">
                    <p>Do you want sushi ?</p>
                    <a className="button1" href="/order">See Menu & Order</a>
                </div>
                <img src={sushi}/>
            </div>
            <div className="about-us" id="aboutus">
                <div className="text-header">
                    <div className="description">
                        <h1>About us</h1>
                        <p>An idea became reality</p>
                    </div>
                    <div className="img-description">
                        <img src={aboutus}/>
                    </div>
                </div>
                <div className="text-header">
                    <div className="img-description">
                        <img src={shop}/>
                    </div>
                    <div className="description">
                        <h1>Our location</h1>
                        <p>The restaurant is located </p>
                    </div>
                </div>
                <div className="text-header">
                    <div className="description">
                        <h1>Our Menu</h1>
                        <p>Japanese Chinese staff with modern notes.</p>
                    </div>
                    <div className="img-description">
                        <img src={menu}/>
                    </div>
                </div>
            </div>
        </div>
    );
}