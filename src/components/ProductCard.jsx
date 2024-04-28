/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const ProductCard = ({ product, toast }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast();
  };
  return (
    <div className="rounded-xl flex flex-col items-start justify-between overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2 ">
      <div>
        <Link to={`/products/${product._id}`}>
          <img src={product.image} alt="" className="" />
          <div className="px-2">
            <h2 className="font-semibold">{product.name}</h2>
            <div className="flex items-center gap-2">
              Rating: <FaStar className=" text-yellow-500"></FaStar> {product.rating}
            </div>
            <div>Price:{product.price}</div>
          </div>
        </Link>
        <button
          className="bg-yellow-500 p-2 mx-auto w-full"
          onClick={() => handleAddToCart(product)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
ProductCard.propTypes = { children: PropTypes.node };

export default ProductCard;
