import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Skeleton from "react-loading-skeleton";
import CategoryFilter from "./CategoryFilter";
import ProductItem from "./ProductItem";
import { getProducts } from "../store/product-slice";

const Products = () => {
  const dispatch = useDispatch();
  const likedProductIds = useSelector((state) => state.wishlist?.products);
  const { products, loading, error } = useSelector((state) => state?.product);

  const [filter, setFilter] = useState(products);

  useEffect(() => {
    dispatch(getProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const Error = () => {
   return <h2 className="text-center my-5">{error}</h2>
  }

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterHandler = (filteredItems) => {
    setFilter(filteredItems);
  };

  const ShowProducts = () => {
    return (
      <>
        <CategoryFilter data={products} categoryFilterHandler={filterHandler} />
        {filter?.map((product) => {
          return (
            <ProductItem
              like={likedProductIds.indexOf(product.id) === -1 ? false : true}
              key={product.id}
              product={product}
            />
          );
        })}
      </>
    );
  };

  return (
    <div className="container my-3 py-2">
      <div className="row">
        <div className="col-12 mb-3">
          <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {loading && <Loading /> }
        {!loading && !error && <ShowProducts /> }
        {!loading && error && <Error /> }
      </div>
    </div>
  );
};

export default Products;
