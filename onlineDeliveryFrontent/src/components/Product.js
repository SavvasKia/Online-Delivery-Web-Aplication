import React from 'react'
import data from '../data';
import $ from 'jquery'

export default function Product(props) {


    function modalProduct(element) {
        console.log(element.name);
        console.log(element.price);
        console.log(element.description);
    }

    const {element} = props;
    return (
        <a href="#" id={element.id} key={element.id} className="product"
        onClick={() => modalProduct(element)}  >
            <h1>{element.name}<span>{element.price}$</span></h1>
            <p>{element.description}</p> 
        </a>
        
    )
}


