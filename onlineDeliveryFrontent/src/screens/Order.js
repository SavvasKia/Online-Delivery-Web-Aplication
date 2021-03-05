import React from 'react';
import locationImage from '../images/location_icon.svg';
import cancelIcon from '../images/Icons8-Ios7-Arrows-Forward.ico';
import sushi from '../images/backgroundImage.jpg';
import data from '../data';
import Product from '../components/Product';

export default function Order (){
    return (
        <div className="main-container">
            <div className="image">
                <img src={sushi}/>
            </div>
            <header className="main-header"><b>The menu</b></header>
            <div className="onlineDeliver-menu-container">
                <div className="categories">
                    <header><b>Categories</b></header>
                    {data["menu"].map((list) => (
                        <a key={list.id}  href={"#"+list.name}  id="myLink">
                            <div className="">{list.name}</div>
                        </a>
                    ))}
                </div>
                <div className="menu-specific">
                    {data["menu"].map((list) => (
                        <div key={list.id} >
                            <header><b>{list.name}</b></header><hr/>
                            {  
                                list.staff.map(element => (
                                    <Product key={element.id} element={element}></Product>
                                ))
                            }
                        </div>
                        )
                    )}
                </div>
            <div className="cart">
                <h1><b>My Cart</b></h1>
                <div className="location">
                    <div>
                        <img src={locationImage} />
                        <p>Ano Hlioupoli 70</p>
                    </div>
                    <button type="button" className="locationChange" onClick={()=>{ alert('alert'); }}>Change</button>
                </div>
                <button type="button" className="deliverChange" onClick={()=>{ alert('alert'); }}>Delivery<img src={cancelIcon} /> </button>
                <button type="button" className="dropdownDeliverChange" onClick={()=>{ alert('alert'); }}>Delivery</button>
                <button type="button" className="dropdownDeliverChange" onClick={()=>{ alert('alert'); }}>Takeaway</button>
                <div className="items">
                    <div className="item">
                        <h1>Items</h1>
                        <button type="button" className="cancelItem" onClick={()=>{ alert('alert'); }}></button>
                    </div>
                    <p>desciption</p>
                    <div className="itemsCostAndQuantity">
                        <input type="number" id="quantity" name="quantity" min="1" max="10" placeholder="1"/> 
                        <var>10$</var>
                    </div>
                </div>
                <hr className="split"/>
                <div className="costSum">
                    <h1>Cost</h1>
                    <p>10$</p>
                </div>
                <button type="button" className="submitDelivery" onClick={()=>{ alert('alert'); }}>Continue</button>
                </div>
            </div>
        </div>
    );
}