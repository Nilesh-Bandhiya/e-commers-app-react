import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { wishlistActions } from "../store/wishlist-slice";
import { useSelector } from "react-redux";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const likedProductIds = useSelector((state) => state.wishlist?.products)
  const { productId } = useParams();

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      setProduct(await response.json());
      setLoading(false);
    };

    getProduct();
    // eslint-disable-next-line
  }, []);

  const likebtnHandler = () => {
    dispatch(
      wishlistActions.toggleItemToWishlist(product.id)
    );

  }

  const handleAddProduct = (product) => {
    dispatch(
      cartActions.addItemToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      })
    );
  };

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} width={200} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };

  let like = likedProductIds.indexOf(product.id) === -1;

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6 ">
          <div className="row ">
            <button type="button" onClick={likebtnHandler} className={`btn btn-${like?"dark":"light"} wishlistButton`}>
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
            onClick={() => {
              handleAddProduct(product);
            }}
            className="btn btn-outline-dark px-4 py-2"
          >
            Add to Cart
          </button>
          <NavLink to="/cart" className="btn btn-dark ms-2 px-4 py-2">
            Go to Cart
          </NavLink>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-3">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
