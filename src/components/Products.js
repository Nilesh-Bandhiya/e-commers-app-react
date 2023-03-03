import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import CategoryFilter from "./CategoryFilter";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";

const Products = () => {

  const likedProductIds = useSelector((state) => state.wishlist?.products)

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let componentMount = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMount) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return () => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        componentMount = false;
      };
    };

    getProducts();
  }, []);

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
        <CategoryFilter data={data} categoryFilterHandler={filterHandler} />
        {filter.map((product) => {
          return (
              <ProductItem like={likedProductIds.indexOf(product.id) === -1 ? false : true} key={product.id} product={product} />
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
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
  );
};

export default Products;
