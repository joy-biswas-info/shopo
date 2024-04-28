import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="rounded-xl flex flex-col items-start justify-between overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2 ">
      <div>
        <img src={product.image} alt="" className="" />
        <div className="px-2">
          <h2>{product.name}</h2>
          <div className="flex items-center gap-2">
            Rating: <FaStar className=" text-yellow-500"></FaStar> {product.rating}
          </div>
          <div>Price:{product.price}</div>
        </div>
        <button
          className="bg-yellow-500 p-2 mx-auto w-full"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
