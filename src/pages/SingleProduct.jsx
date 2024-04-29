import { useParams } from "react-router-dom";
import {
  useGetCommentQuery,
  useGetSingleProductQuery,
  usePostCommentMutation,
} from "../features/products/productApi";
import { FaStar } from "react-icons/fa";
import { addToCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { FiSend } from "react-icons/fi";
import { useState } from "react";
import { FaPerson } from "react-icons/fa6";

const SingleProduct = () => {
  const [inputValue, setInputValue] = useState("");

  const params = useParams();
  const { data } = useGetSingleProductQuery(params.id);
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const { data: commentData, isLoading: productIsLoading } = useGetCommentQuery(params.id);
  const [postComment] = usePostCommentMutation();
  const handleSubmit = (e) => {
    e.preventDefault();
    const options = {
      id: params.id,
      data: { comment: inputValue },
    };
    postComment(options);
    setInputValue("");
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      {!productIsLoading ? (
        <div>
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-4">
              <img src={data?.thumbnail} alt="" className="h-[450px] w-[450px] object-fit-cover" />
            </div>
            <div className="col-span-8 mt-12">
              <h2 className="text-2xl font-semibold">{data?.title}</h2>
              <p className="text-xl font-medium my-2">${data?.price}</p>
              <p className="flex items-center gap-2 my-2">
                Ratings {data?.rating} <FaStar className="text-yellow-500"></FaStar>
              </p>
              <p className="w-96">{data?.description}</p>
              <button
                className="bg-yellow-500 p-2 mx-auto my-8"
                onClick={() => handleAddToCart(data)}
              >
                Add to cart
              </button>{" "}
            </div>
          </div>
          <div className="my-12">
            <h2 className="font-semibold text-2xl">Reviews</h2>
            <div className="mt-10">
              <form className="flex gap-5 items-center" onSubmit={handleSubmit}>
                <textarea
                  className="min-h-[30px] border border-black"
                  onChange={handleChange}
                  value={inputValue}
                  placeholder="Reviews"
                />
                <button
                  type="submit"
                  className="rounded-full h-10 w-10 p-2 text-[25px] btn btn-warning"
                >
                  <FiSend />
                </button>
              </form>
              {commentData?.comments.map((comment, index) => (
                <div
                  key={index}
                  className="flex gap-3 items-center mb-5 bg-warning my-8 max-w-screen-md"
                >
                  <FaPerson />
                  <p className="text-xl">{comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4 w-full max-w-screen-md mx-auto">
          <div className="skeleton h-56 w-full"></div>
          <div className="skeleton h-12 w-48"></div>
          <div className="skeleton h-12 w-full"></div>
          <div className="skeleton h-12 w-full"></div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
