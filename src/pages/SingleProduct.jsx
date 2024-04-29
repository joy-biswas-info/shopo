import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../features/products/productApi";
import { FaStar } from "react-icons/fa";
import Reviews from "../components/Reviews";
import { addToCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const SingleProduct = () => {
  const params = useParams();
  const { data } = useGetSingleProductQuery(params.id);
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-4">
          <img src={data?.image} alt="" />
        </div>
        <div className="col-span-8 mt-12">
          <h2 className="text-2xl font-semibold">{data?.name}</h2>
          <p className="text-xl font-medium my-2">${data?.price}</p>
          <p className="flex items-center gap-2 my-2">
            Ratings {data?.rating} <FaStar className="text-yellow-500"></FaStar>
          </p>
          {data?.features.map((item, i) => (
            <p key={i} className="my-1">
              {item}
            </p>
          ))}
          <button className="bg-yellow-500 p-2 mx-auto" onClick={() => handleAddToCart(data)}>
            Add to cart
          </button>{" "}
        </div>
      </div>
      <div>{data?.comments.length > 1 && <Reviews review={data.comments} />}</div>
    </div>
  );
};

export default SingleProduct;
