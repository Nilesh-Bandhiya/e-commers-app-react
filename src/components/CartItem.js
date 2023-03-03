import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const addCartHandler = (product) => {
    dispatch(
      cartActions.addItemToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      })
    );
  };

  const removeCartHandler = (id) => {
    dispatch(cartActions.removeItemToCart(id));
  };

  return (
    <div className="px-4 my-5 bg-light rounded-3">
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <img
              src={cartItem.image}
              alt={cartItem.title}
              height="200px"
              width="180px"
            />
          </div>
          <div className="col-md-4">
            <h3>{cartItem.title}</h3>
            <p className="lead fw-bold">
              {cartItem.quantity} X ${cartItem.price} = $
              {cartItem.totalprice.toFixed(2)}
            </p>
            <button
              onClick={() => removeCartHandler(cartItem.id)}
              className="btn btn-outline-dark me-4"
            >
              <i className="fa fa-minus"></i>
            </button>
            <button
              onClick={() => addCartHandler(cartItem)}
              className="btn btn-outline-dark me-4"
            >
              <i className="fa fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
