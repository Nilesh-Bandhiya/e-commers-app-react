import React from 'react'
import { Link } from 'react-router-dom'

const ProductItem = ({product}) => {
  return (
    <div className="col-md-3 mb-3">
    <div className="main-card card h-100 text-center p-4">
      <img
        src={product.image}
        className="card-img-top"
        alt={product.title}
        height="250px"
      />
      <div className="card-body">
        <h5 className="card-title mb-0">
          {product.title.substring(0, 12)}...
        </h5>
        <p className="card-text lead fw-bold">${product.price}</p>
        <Link to={`${product.id}`} className="btn btn-outline-dark">
          Buy Now
        </Link>
      </div>
    </div>
  </div>
  )
}

export default ProductItem