import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { useGetProductsQuery } from "../features/products/productApi";
import { setPriceRange, toggleState } from "../features/products/productSlice";

const Shop = () => {
  const dispatch = useDispatch();
  const { data } = useGetProductsQuery(undefined);

  const handleSlider = (value) => {
    dispatch(setPriceRange(value));
  };
  const { status, priceRange } = useSelector((state) => state.product);
  let productsData;
  if (status) {
    productsData = data?.data.filter((item) => item.status === true && item.price < priceRange);
  } else if (priceRange > 0) {
    productsData = data?.data.filter((item) => item.price < priceRange);
  } else {
    productsData = data;
  }

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
              min="0"
              max="150"
              step={1}
              className="range range-warning"
              onChange={(event) => handleSlider(event.target.value)}
            />
          </div>
          <div>
            <h4>Product category</h4>
          </div>
        </div>
        <div className="grid grid-cols-4 col-span-10 gap-4">
          {productsData?.map((item) => (
            <ProductCard key={item._id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
