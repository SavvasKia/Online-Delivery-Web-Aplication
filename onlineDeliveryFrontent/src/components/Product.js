import React, {Component} from 'react'
import data from '../data';
import Modal from 'react-modal';
import { render } from 'react-dom';

//export default function Product(props) {
class Product extends Component{
    state = {
        modalIsOpen: false,
    };

    openModal = () => {
        this.setState({ modalIsOpen: true });
    };

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    };
    
    render() {
        const boolean=false;
        const {element} = this.props;
        return (
            <div>
                <Modal className="modal-item" overlayClassName="modal-overlay" isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}>
                    <div className="modal-item-div">
                        <h1>{element.name}</h1>
                        <p>{element.description}</p>
                        <hr/>
                        <textarea type="text" placeholder="Enter Extra" name="extra"></textarea>
                        <div className="modal-quantity">
                            <div className="quantity">
                                <button class="plus-btn" type="button" name="button">
                                    <img src="plus.svg" alt="" />
                                </button>
                                <input type="text" className="modal-input" name="name" value="1"/>
                                <button class="minus-btn" type="button" name="button">
                                    <img src="minus.svg" alt="" />
                                </button>
                            </div>
                            <h1>{element.price}$</h1>
                        </div>
                        <button type="submit" className="add-to-Cart"><b>Add Item</b></button>
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
