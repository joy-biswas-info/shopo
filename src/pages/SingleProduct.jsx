import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../features/products/productApi";
import { FaStar } from "react-icons/fa";

const SingleProduct = () => {
  const params = useParams();
  const { data } = useGetSingleProductQuery(params.id);
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

          <button className="btn btn-warning mt-12">Add to cart</button>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold my-2">Review</h2>
        {data?.comments.map((comn, i) => (
          <div key={i}> {comn}</div>
        ))}
      </div>
    </div>
  );
};

export default SingleProduct;
