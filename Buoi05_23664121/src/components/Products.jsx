import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div>
        <h2>Danh sách các sản phẩm:</h2>
        <ul>
            <li><Link to="/products/1">Iphone</Link></li>
            <li><Link to="/products/2">SamSung</Link></li>
            <li><Link to="/products/3">Laptop</Link></li>
        </ul>
    </div>
  )
}

export default Products