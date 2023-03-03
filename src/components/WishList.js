import React from "react";
import WishlistItem from "./WishlistItem";
import { useSelector } from "react-redux";

const WishList = () => {

  const likedProductsIds = useSelector((state) => state.wishlist?.products);
  const products = useSelector((state) => state.product?.products);

  return (
    <div className="container">
      <h2 className="text-center my-3 fw-bold">Your Wishlist</h2>
      {likedProductsIds?.length !== 0 ? (
        likedProductsIds?.map((id) => {
          let likedItem = products.find((product) => product.id === id);
          return <WishlistItem key={likedItem.id} likedItem={likedItem} />;
        })
      ) : (
        <h2 className="text-center my-5">Your Wishlist is Empty!</h2>
      )}
    </div>
  );
};

export default WishList;
