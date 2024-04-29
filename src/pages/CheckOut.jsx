import { useState } from "react";
import { useSelector } from "react-redux";

const CheckOut = () => {
  const [scheduled, setScheduled] = useState(false);
  const { products, total } = useSelector((state) => state.cart);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center items-center h-[calc(100vh-80px)] gap-10 text-black">
        <div className="max-w-3xl w-full">
          <h1 className="mb-2">Delivery Information</h1>
          <div className="h-[60vh] border border-gray-300 rounded-md p-10 overflow-auto">
            <div className="flex gap-5">
              <div className="w-full space-y-5">
                <div className="flex flex-col">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" className="mt-2 border p-1.5" required />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="name">Email</label>
                  <input type="text" id="name" className="mt-2 border p-1.5" required />
                </div>
              </div>
              <div className="w-full space-y-5">
                <div className="flex flex-col">
                  <label htmlFor="name">Phone</label>
                  <input type="text" id="name" className="mt-2 border p-1.5" required />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="name">City</label>
                  <input type="text" id="name" className="mt-2 border p-1.5" required />
                </div>
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <label htmlFor="name">Address</label>
              <textarea id="name" className="mt-2 border p-1.5" required />
            </div>
            <div className="flex items-center gap-2 mt-5">
              <label className="text-lg">Scheduled Delivery</label>
              <input type="checkbox" className="toggle" onClick={() => setScheduled(!scheduled)} />
            </div>
            <div className="flex gap-5 mt-5">
              <div className="w-full">
                <label htmlFor="note">Note</label>
                <input disabled={!scheduled} type="text" id="note" className="mt-3" />
              </div>
              <div className="w-full flex flex-col mt-2">
                <label className="mb-3" htmlFor="name">
                  Date
                </label>
                <input type="date" name="" id="" />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-lg w-full">
          <h1 className="mb-2">Order Summery</h1>
          <div className="border border-gray-300 rounded-md h-[60vh] p-10 flex flex-col">
            <div className="flex-grow  mb-2 space-y-2 overflow-auto">
              {products.map((product) => (
                <div
                  className="flex justify-between items-center bg-gray-100 p-1 rounded-lg"
                  key={product._id}
                >
                  <div className="flex items-center">
                    <img
                      src={product.thumbnail}
                      className="h-[82px] rounded-md mr-2 object-fit-contain w-24"
                      alt=""
                    />
                    <div>
                      <h1 className="text-lg mb-2">{product.title}</h1>
                      <p>Price: {product.price}</p>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-4xl mr-5">{product.quantity}</h1>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-lg">
                <p>Subtotal</p>
                <p>{total.toFixed(2)}</p>
              </div>
              <div className="flex justify-between text-lg">
                <p>Delivery</p>
                <p>{total > 0 ? 4.5 : 0}$</p>
              </div>
              <div className="flex justify-between text-xl font-bold">
                <p>Total</p>
                <p>{total > 0 ? (total + 4.5).toFixed(2) : 0}$</p>
              </div>
              <button className="w-full btn btn-warning">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CheckOut;
