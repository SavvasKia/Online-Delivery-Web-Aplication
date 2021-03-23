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

    addToCartCB = () => {
        this.props.handler(
            {  
                id:this.props.element.id,
                name: this.props.element.name,
                price: this.props.element.price,
                cost: this.state.cost,
                quantity: this.state.quantity,
                description: this.props.element.description
            }
        );
        this.setState({ modalIsOpen: false });
    }
    
    render() {
        const boolean=false;
        return (
            <div>
                <Modal className="modal-item" overlayClassName="modal-overlay" 
                    isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}
                    appElement={document.getElementById('app')}
                    ariaHideApp={false}>
                    <div className="modal-item-div">
                        <h1>{this.props.element.name}</h1>
                        <p>{this.props.element.description}</p>
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
                        <button type="submit" onClick={this.addToCartCB} className="add-to-Cart"><b>Add Item</b></button>
                    </div>
                </Modal>
                <a href="#" id={this.props.element.id} key={this.props.element.id} className="product"
                onClick={() => this.openModal(this.props.element)}  >
                    <h1>{this.props.element.name}<span>{this.props.element.price}$</span></h1>
                    <p>{this.props.element.description}</p> 
                </a>
            </div>
        );
    }
}

export default Product;
