import React,{useState} from "react";
import {  useNavigate } from "react-router-dom";

const ProductItem = ({ product }) => {
  const navigate = useNavigate();
  const [like, setLike] = useState(false);

  const detailPageHandler = () => {
    navigate(`${product.id}`);
  };

  const wishlistHandler = (event) => {
    event.stopPropagation();
    setLike(!like);
  };

  return (
    <div className="col-md-3 mb-3" role="button" onClick={detailPageHandler}>
      <div className="main-card card h-100 p-3">
      <i className={`wishlistbutton fa fa-heart${like?"":"-o"}`} role="button" onClick={wishlistHandler} />
        {/* <i className="wishlistbutton fa fa-heart" ></i> */}
        <img
          src={product.image}
          className="card-img-top"
          alt={product.title}
          height="250px"
        />
        <div className="card-body">
          <h5 className="card-title mb-1">
            {product.title.substring(0, 18)}...
          </h5>
          <div className="row">
            <div className="col-md-3">
              <span className="badge text-bg-success fw-bold lead text-start">
                {product.rating && product.rating.rate}{" "}
                <i className="fa fa-star"></i>
              </span>
            </div>
            <div className="col-md-4">
              <p className="fw-bolder mb-2">
                {product.rating && `(${product.rating.count})`}{" "}
              </p>
            </div>
          </div>
          <p className="card-text lead fw-bold">${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
