import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../store/cart-slice";
import { wishlistActions } from "../store/wishlist-slice";

const WishlistItem = ({ likedItem }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const removeLikeHandler = () => {
    dispatch(wishlistActions.toggleItemToWishlist(likedItem.id));
  };

  const handleAddToCart = (product) => {
    dispatch(
      cartActions.addItemToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      })
    );
    navigate("/cart")
  };

  return (
    <div className="px-4 my-5 bg-light rounded-3">
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <img
              src={likedItem.image}
              alt={likedItem.title}
              height="200px"
              width="180px"
            />
          </div>
          <div className="col-md-4">
            <h3>{likedItem.title}</h3>
            <div className="row mt-1 align-items-center">
              <div className="col-md-2 justify-content-center">
                <span className="badge text-bg-success fs-6 text-start">
                  {likedItem.rating && likedItem.rating.rate}{" "}
                  <i className="fa fa-star"></i>
                </span>
              </div>
              <div className="col-md-2 justify-content-center">
                <p className="fw-semibold fs-5  mb-2">
                  {likedItem.rating && `(${likedItem.rating.count})`}{" "}
                </p>
              </div>
            </div>
            <p className="card-text lead fw-bold">${likedItem.price}</p>
            <button
              onClick={() => handleAddToCart(likedItem)}
              className="btn btn-outline-dark mt-0"
            >
              Add to Cart
            </button>
            <button
              onClick={() => removeLikeHandler(likedItem.id)}
              className="btn btn-dark mt-0 ms-3"
            >
              Remove From Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistItem;
