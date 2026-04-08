import { useState } from 'react'
import './App.css'
import ProductCard from './Components/ProductCard'
import shoes from './assets/shoes.jpg'
import tshirt from './assets/tshirt.png'
import jeans from './assets/jeans.jpg'


function App() {

  return (
    <div className='parent-container'>
    <ProductCard namee="Shoes" img={shoes} price="₹2000" desc="Comfortable and durable shoes designed for daily wear. Lightweight with good grip, perfect for walking and casual outings."/>
    <ProductCard namee="Tshirt" img={tshirt} price="₹500" desc="Soft and breathable t-shirt made from quality fabric. Offers a comfortable fit, ideal for everyday casual wear."/>
    <ProductCard namee="Jeans" img={jeans} price="₹700" desc="Stylish denim jeans with a comfortable fit for all-day use. Durable stitching makes them suitable for regular wear and multiple occasions."/>
    
    </div>
  )
}

export default App
