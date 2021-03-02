import React from 'react';
import locationImage from '../images/location_icon.svg';
import cancelIcon from '../images/Icons8-Ios7-Arrows-Forward.ico';
import sushi from '../images/backgroundImage.jpg';

export default function Order (){
    return (
        <div class="main-container">
            <main class="order">
                <div className="image">
                    <img src={sushi}/>
                </div>
                <header className="main-header"><b>The menu</b></header>
                <div class="onlineDeliver-menu-container" id="menu">
                    <div class="row-of-menu">
                        <header><b>Categories</b></header>
                        <a href="javascript:void(0)" onclick="openMenu(event, 'Sushi');" id="myLink">
                            <div class="">Sushi</div>
                        </a>
                        <a href="javascript:void(0)" onclick="openMenu(event, 'Salads');">
                            <div class="">Salads</div>
                        </a>
                        <a href="javascript:void(0)" onclick="openMenu(event, 'Starter');">
                        <div class="">Starter</div>
                        </a>
                    </div>
                <div class="menu-specific">
                <div id="Sushi">
                    <header><b>Sushi</b></header><hr/>
                    <h1>Sashimi<span>$12.50</span></h1>
                    <p>Fresh tomatoes, fresh mozzarella, fresh basil</p>
                    
                    <h1>Fried<span>$15.50</span></h1>
                    <p>Four cheeses (mozzarella, parmesan, pecorino, jarlsberg)</p>
                    
                    <h1>Solomon<span>$15.50</span></h1>
                    <p>Four cheeses (mozzarella, parmesan, jarlsberg)</p>
                    
                    <h1>Tuna<span>$15.50</span></h1>
                    <p>Four cheeses (mozzarella, pecorino, jarlsberg)</p>
                
                </div>
                <div id="Salads">
                    <header><b>Salads</b></header><hr/>
                    <h1>Ceasar <span>$15.50</span></h1>
                    <p>Four cheeses (mozzarella, pecorino, jarlsberg)</p>
                    
                    <h1>Greek <span>$15.50</span></h1>
                    <p>Four cheeses (mozzarella, pecorino, jarlsberg)</p>
                    
                    <h1>Green <span>$15.50</span></h1>
                    <p>Four cheeses (mozzarella, pecorino, jarlsberg)</p>
                </div>
                <div id="Starters">
                    <header><b>Starters</b></header><hr/>
                    <h1>French Fries <span>$15.50</span></h1>
                    <p>Four cheeses (mozzarella, pecorino, jarlsberg)</p>
                    
                    <h1>Pork belly <span>$15.50</span></h1>
                    <p>Four cheeses (mozzarella, pecorino, jarlsberg)</p>
                    
                    <h1>Imami <span>$15.50</span></h1>
                    <p>Four cheeses (mozzarella, pecorino, jarlsberg)</p>
                </div>
                </div>
                <div class="cart">
                <h1><b>My Cart</b></h1>
                <div class="location">
                    <div>
                    <img src={locationImage} />
                    <p>Ano Hlioupoli 70</p>
                    </div>
                    <button type="button" class="locationChange" onclick="alert('Underconstruction')">Change</button>
                </div>
                <button type="button" class="deliverChange" onclick="alert('Underconstruction')">Delivery<img src={cancelIcon} /> </button>
                <button type="button" class="dropdownDeliverChange" onclick="alert('Underconstruction')">Delivery</button>
                <button type="button" class="dropdownDeliverChange" onclick="alert('Underconstruction')">Takeaway</button>
                <div class="items">
                    <div class="item">
                    <h>Items</h>
                    <button type="button" class="cancelItem" onclick="alert('Underconstruction')"></button>
                    </div>
                    <p>desciption</p>
                    <div class="itemsCostAndQuantity">
                    <input type="number" id="quantity" name="quantity" min="1" max="10" value="1"/> 
                    <var>10$</var>
                    </div>
                </div>
                <hr class="split"/>
                <div class="costSum">
                    <h>Cost</h>
                    <var>10$</var>
                </div>
                <button type="button" class="submitDelivery" onclick="alert('Underconstruction')">Continue</button>
                </div>
                </div>
            </main>
        </div>
    );
}