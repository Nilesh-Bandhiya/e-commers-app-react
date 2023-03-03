import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart.products);

  return (
    <div className="container">
      <h2 className="text-center my-3 fw-bold">Your Cart</h2>
      {cartProducts.length !== 0 ? (
        cartProducts.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))
      ) : (
        <h2 className="text-center my-5">Your Cart is Empty!</h2>
      )}
    </div>
  );
};

export default Cart;
