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
    <div className="flex flex-col items-start justify-between overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2 ">
      <div>
        <Link to={`/products/${product._id}`}>
          <img src={product?.thumbnail} alt="" className="h-56 w-96 object-fit-cover" />
          <div className="p-2 my-2">
            <h2 className="font-semibold">{product.title}</h2>
            <div className="flex items-center gap-2">
              Rating: <FaStar className=" text-yellow-500"></FaStar> {product.rating}
            </div>
            <div>Price:{product.price}</div>
          </div>
        </Link>
        <button
          className="bg-yellow-500 p-2 mx-auto w-full m-2 "
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
