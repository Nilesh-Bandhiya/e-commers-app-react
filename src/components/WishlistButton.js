import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const WishlistButton = () => {
  const likedArray = useSelector((state) => state.wishlist?.products);
  const wishlistQty = likedArray?.length;

  return (
    <NavLink to="/wishlist" className="btn btn-outline-light ms-2">
      Wishlist <span className="badge text-bg-light">{wishlistQty}</span>
    </NavLink>
  );
};

export default WishlistButton;
