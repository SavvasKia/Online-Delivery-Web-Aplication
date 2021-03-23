import React, {Component, useEffect} from 'react'
import locationImage from '../images/location_icon.svg';
import cancelIcon from '../images/Icons8-Ios7-Arrows-Forward.ico';
import sushi from '../images/backgroundImage.jpg';
import data from '../data';
import Product from '../components/Product';

class Order extends Component{
    constructor(props) {
        super(props)
      }

    state = data;
    sum = 0;


    handler = (val) => {
        //first see if there is tha same item in the cart.
        //then update or add 
        if(this.state.cart.find( item => item.id == val.id) != undefined){
            this.setState( prevState => (
                {
                    cart: prevState.cart.map(
                        el => el.id === val.id? { ...el, quantity: el.quantity+val.quantity}: el
                    )
                }
            ));
        }else{
            this.setState(
                {
                    cart: this.state.cart.concat(
                        {
                            id:val.id,
                            name: val.name,
                            price: val.cost,
                            quantity: val.quantity,
                            description: val.description
                        }
                )
                }
            );
        }
        this.sum+=val.quantity*val.cost;
    }

    removeItemFromCart = (item) => {
        
        this.setState(prevState => ({
            cart: prevState.cart.filter(cart => cart.id !== item.id)
        }));
        this.sum -= item.quantity*item.price;
    }

    updateItem = (item) => {
        // console.log(item);
    }

    render() {
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
                                        <Product key={element.id} element={element} handler={this.handler}></Product>
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
                        {this.state["cart"].map((items) => (
                            <div className="items" key={items.id}>
                                <div className="item">
                                    <h1>{items.name}</h1>
                                    <button type="button" className="cancelItem" onClick={ () => this.removeItemFromCart(items)}></button>
                                </div>
                                <p>{items.description}</p>
                                <div className="itemsCostAndQuantity">
                                    <var>x{items.quantity}</var>
                                    <var>{items.price}$</var>
                                </div>
                            </div>
                            )
                        )}
                    <hr className="split"/>
                    <div className="costSum">
                        <h1>Cost</h1>
                        <p>{this.sum}$</p>
                    </div>
                    <button type="button" className="submitDelivery" onClick={()=>{ alert('alert'); }}>Continue</button>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Order;