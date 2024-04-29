import { HiMinus, HiOutlinePlus, HiOutlineTrash } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, removeOne } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const { products, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="space-y-5 min-h-[100vh]">
      {products.length < 1 ? (
        <div className="flex flex-col items-center my-12">
          {" "}
          <h2 className="text-2xl font-semibold text-center">There is no products</h2>{" "}
          <Link to={"/"} className="btn btn-warning my-8">
            Shop Now
          </Link>
        </div>
      ) : (
        <div>
          <h2 className="text-center text-2xl font-semibold my-12">Cart</h2>
          <h3 className="text-xl font-semibold my-8">Total : $ {total}</h3>
          {products?.map((product) => (
            <div key={product.title}>
              <div className="border h-44 p-5 flex justify-between rounded-md">
                <div className="border-r pr-5 shrink-0">
                  <img
                    src={product?.thumbnail}
                    alt=""
                    className="h-full w-28 md:w-48 object-fit-cover "
                  />
                </div>
                <div className="px-2 w-full flex flex-col gap-3">
                  <h1 className="text-2xl self-center">{product?.name}</h1>
                  <p>Quantity: {product.quantity}</p>
                  <p className="text-xl">
                    Total Price: {(product.price * product.quantity).toFixed(2)} $
                  </p>
                </div>
                <div className="border-l pl-5 flex flex-col justify-between">
                  <button
                    onClick={() => {
                      dispatch(addToCart(product));
                    }}
                  >
                    <HiOutlinePlus size="20" />
                  </button>
                  <button
                    onClick={() => {
                      dispatch(removeOne(product));
                    }}
                  >
                    <HiMinus size="20" />
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-400 p-1 text-white"
                    onClick={() => dispatch(removeFromCart(product))}
                  >
                    <HiOutlineTrash size="20" />
                  </button>
                </div>
              </div>
            </div>
          ))}
          <Link to={"/checkout"} className="mx-auto flex my-12">
            {" "}
            <button className="btn btn-warning items-center w-96 mx-auto">Checkout</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
