import React from 'react'
import './ProductList.css'
function ProductList() {
    const products = [
  { id: 1, name: 'Product 1', price: '$10' },
  { id: 2, name: 'Product 2', price: '$15' },
  { id: 3, name: 'Product 3', price: '$20' },
  { id: 4, name: 'Product 4', price: '$12' },
  { id: 5, name: 'Product 5', price: '$18' },
  { id: 6, name: 'Product 6', price: '$25' },
];
  return (
    <div className="container">
      <h1>Product List</h1>
      <div className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList