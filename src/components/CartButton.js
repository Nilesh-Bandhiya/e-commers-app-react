import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const CartButton = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <NavLink to="/cart" className="btn btn-outline-light ms-2">
      Cart <span className="badge text-bg-light">{totalQuantity}</span>
    </NavLink>
  );
};

export default CartButton;
