import React from 'react'
import shoes from "../assets/shoes.jpg";
import "./ProductCard.css" 

const ProductCard = (props) => {
  return (
    <div className='product-container'>
        <p id='product-name'>{props.namee}</p>
        <img id='product-img' src={props.img} alt={props.name}></img>
        <p id="product-desc">{props.desc}</p>
      
    </div>
  )
}

export default ProductCard
