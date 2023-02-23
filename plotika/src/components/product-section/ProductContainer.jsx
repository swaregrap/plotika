import React from 'react'
import './ProductSection.css'
const ProductContainer = (props) => {
  return (

    
        <div className="individual-product">
             <img src={props.img} alt="/" />
      
         </div>
    
  )
}

export default ProductContainer
