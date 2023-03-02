import React from 'react'

const CategoryFilter = (props) => {

  const {data, categoryFilterHandler} = props;

    const filterHandler = (category) => {
        const filteredProducts = data.filter(
          (product) => (product.category === category)
        );
        categoryFilterHandler(filteredProducts)
      };

  return (
    <div className="buttons d-flex justify-content-center mb-4 pb-4">
          <button
            className="btn btn-outline-dark ms-2"
            onClick={() => categoryFilterHandler(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark ms-2"
            onClick={() => {
              filterHandler("men's clothing");
            }}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark ms-2"
            onClick={() => {
              filterHandler("women's clothing");
            }}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark ms-2"
            onClick={() => {
              filterHandler("jewelery");
            }}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark ms-2"
            onClick={() => {
              filterHandler("electronics");
            }}
          >
            Electronics
          </button>
        </div>
)}

export default CategoryFilter;