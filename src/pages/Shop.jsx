import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { useGetProductsQuery } from "../features/products/productApi";
import { setPriceRange, toggleState } from "../features/products/productSlice";
import { useState } from "react";

const Shop = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetProductsQuery(undefined);
  const handleSlider = (value) => {
    dispatch(setPriceRange(value));
  };

  const { stock, priceRange, searchTerm } = useSelector((state) => state.product);
  let productsData;

  // Apply filters
  productsData = data?.data.filter((item) => {
    const matchSearch =
      searchTerm !== "" ? item.title.toLowerCase().includes(searchTerm.toLowerCase()) : true;
    const matchStatus = !stock || (stock && item.stock > 0);
    const matchPrice = priceRange > 1 ? item.price < priceRange : true;
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
      <div className="grid md:grid-flow-col md:grid-cols-12 space-x-4">
        <div className="col-span-2 px-3 flex flex-col gap-4 my-6">
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
              max="2000"
              step={1}
              className="range range-warning"
              onChange={(event) => handleSlider(event.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 md:col-span-10 gap-8">
          {productsData?.length < 1 && <p>Nothing on search</p>}
          {!isLoading ? (
            <>
              {productsData?.map((item) => (
                <ProductCard key={item._id} product={item} toast={addToCart} />
              ))}
            </>
          ) : (
            <div className="space-x-6 flex">
              <div className="flex flex-col gap-4 w-96">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-48"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
              <div className="flex flex-col gap-4 w-96">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-48"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
              <div className="flex flex-col gap-4 w-96">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-48"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
              <div className="flex flex-col gap-4 w-96">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-48"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
            </div>
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
