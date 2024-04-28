import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { useGetProductsQuery } from "../features/products/productApi";
import { setPriceRange, toggleState } from "../features/products/productSlice";
import { useState } from "react";

const Shop = () => {
  const dispatch = useDispatch();
  const { data } = useGetProductsQuery(undefined);
  const handleSlider = (value) => {
    dispatch(setPriceRange(value));
  };

  const { status, priceRange, searchTerm } = useSelector((state) => state.product);
  let productsData;
  console.log(priceRange);
  // Apply filters
  productsData = data?.data.filter((item) => {
    // Apply search filter if searchTerm is not empty
    const matchSearch =
      searchTerm !== "" ? item.name.toLowerCase().includes(searchTerm.toLowerCase()) : true;

    // Apply status filter if status is true
    const matchStatus = !status || (status && item.status === true);

    // Apply priceRange filter if priceRange is greater than 0
    const matchPrice = priceRange > 1 ? item.price < priceRange : true;

    // Return true if all conditions are met
    return matchSearch && matchStatus && matchPrice;
  });
  const [showToast, setShowToast] = useState(false);

  const addToCart = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 1000);
  };

  return (
    <div>
      <h2 className="text-center text-3xl font-semibold my-12">Products </h2>
      <div className="grid grid-flow-col grid-cols-12 space-x-4">
        <div className="col-span-2 px-3 flex flex-col gap-4">
          <div>
            <h4>In stock</h4>
            <input
              type="checkbox"
              className="toggle toggle-warning"
              onClick={() => dispatch(toggleState())}
            />
          </div>
          <div>
            <h4>Price range</h4>
            <input
              type="range"
              min="10"
              max="150"
              step={1}
              className="range range-warning"
              onChange={(event) => handleSlider(event.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-4 col-span-10 gap-4">
          {productsData?.length > 0 ? (
            <>
              {productsData?.map((item) => (
                <ProductCard key={item._id} product={item} toast={addToCart} />
              ))}
            </>
          ) : (
            <>No product on your search</>
          )}
        </div>
      </div>
      <div className="toast" style={showToast ? { display: "block" } : { display: "none" }}>
        <div className="alert alert-warning">
          <span>Added to cart</span>
        </div>
      </div>
    </div>
  );
};

export default Shop;
