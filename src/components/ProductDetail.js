import React from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { wishlistActions } from "../store/wishlist-slice";
import { useSelector } from "react-redux";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productId } = useParams();
  const likedProductIds = useSelector((state) => state.wishlist?.products);
  const products = useSelector((state) => state.product?.products);

  let product = products.find((product) => `${product.id}` === productId);

  let like = likedProductIds.indexOf(product.id) === -1;

  const likebtnHandler = () => {
    dispatch(wishlistActions.toggleItemToWishlist(product.id));
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
    navigate("/cart");
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-3">
          <div className="col-md-6 ">
            <div className="row ">
              <button
                type="button"
                onClick={likebtnHandler}
                className={`btn btn-${like ? "dark" : "light"} wishlistButton`}
              >
                <i className="fa fa-heart"></i>
              </button>
            </div>
            <img
              className="product-img"
              src={product.image}
              alt={product.title}
              height="400px"
              width="400px"
            />
          </div>
          <div className="col-md-6">
            <h4 className="text-uppercase text-black-50">{product.category}</h4>
            <h1 className="display-5">{product.title}</h1>
            <div className="row">
              <div className="col-md-2 justify-content-center">
                <span className="badge text-bg-success fs-5 text-start">
                  {product.rating && product.rating.rate}{" "}
                  <i className="fa fa-star"></i>
                </span>
              </div>
              <div className="col-md-2 justify-content-center">
                <p className="fs-4 fw-normal mb-0">
                  {product.rating && `(${product.rating.count})`}{" "}
                </p>
              </div>
            </div>

            <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
            <p className="lead">{product.description}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="btn btn-outline-dark px-4 py-2"
            >
              Add to Cart
            </button>
            <NavLink to="/cart" className="btn btn-dark ms-2 px-4 py-2">
              Go to Cart
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
