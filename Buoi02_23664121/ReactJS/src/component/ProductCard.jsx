import React from 'react'
import "./ProductCard.css"
import myImage from '../assets/9db07fa8c18e4.jpg'
function ProductCard() {
  return (
    <div className='center'>
      <div id='product-card-container'>
          <div id='product-card'>
              <img src={myImage} alt="hinh ban phim"/>
          </div>
        <h4>Bàn phím Aula s75 pro</h4>
        <h5>1.000.000 đ</h5>
        <button>Add to cart</button>
      </div>
    </div>
  )
}

export default ProductCard

