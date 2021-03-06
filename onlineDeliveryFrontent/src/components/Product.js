import React, {Component} from 'react'
import data from '../data';
import Modal from 'react-modal';
import { render } from 'react-dom';
import minusicon from "../images/minus.svg";
import plusicon from "../images/plus.svg";

//export default function Product(props) {
class Product extends Component{
    state = {
        modalIsOpen: false,
        quantity:1,
        price:0,
        cost:0
    };

    increment = () => {
        this.setState({ 
            quantity: this.state.quantity+1,
            cost: (this.state.quantity+1) * this.state.price
        });
    }

    decrement = () => {
        if(this.state.quantity>1)
            this.setState({
                quantity: this.state.quantity-1,
                cost: (this.state.quantity-1) * this.state.price
            });
        else if(this.state.quantity==1)
            this.setState({
                cost: this.state.quantity * this.state.price
            });
    }

    openModal = () => {
        if(this.state.cost==0)
            this.setState({ 
                price: this.props.element.price ,
                cost: this.props.element.price
            });
        this.setState({ modalIsOpen: true });
    };

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    };

    addToCart = () => {
        console.log("add to cart start");
        console.log(this.state.cost);
        console.log(this.props.element.name);
        console.log(this.props.element.description);
        console.log(data.cartItems);
    }
    
    render() {
        const boolean=false;
        const {element} = this.props;
        return (
            <div>
                <Modal className="modal-item" overlayClassName="modal-overlay" 
                    isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}
                    appElement={document.getElementById('app')}
                    ariaHideApp={false}>
                    <div className="modal-item-div">
                        <h1>{element.name}</h1>
                        <p>{element.description}</p>
                        <hr/>
                        <textarea type="text" placeholder="Enter Extra" name="extra"></textarea>
                        <div className="modal-quantity">
                            <div className="quantity">
                                <button className="minus-btn" onClick={this.decrement} type="button" name="button">
                                    <img src={minusicon} alt="" />
                                </button>
                                <input readOnly  type="text" className="modal-input" name="name" placeholder={this.state.quantity} />
                                <button className="plus-btn" onClick={this.increment} type="button" name="button">
                                    <img src={plusicon} alt="" />
                                </button>
                            </div>
                            <h1>{this.state.cost}$</h1>
                        </div>
                        <button type="submit" onClick={this.addToCart} className="add-to-Cart"><b>Add Item</b></button>
                    </div>
                </Modal>
                <a href="#" id={element.id} key={element.id} className="product"
                onClick={() => this.openModal(element)}  >
                    <h1>{element.name}<span>{element.price}$</span></h1>
                    <p>{element.description}</p> 
                </a>
            </div>
        );
    }
}

export default Product;
