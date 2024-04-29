import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BiSearch } from "react-icons/bi";
import { CiHeart, CiShoppingBasket } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductsQuery } from "../features/products/productApi";
import { useState } from "react";
import { setSearchTerm } from "../features/products/productSlice";

const Main = () => {
  const { products } = useSelector((state) => state.cart);
  const { data } = useGetProductsQuery(undefined);
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    const searchVal = e.target.value;
    dispatch(setSearchTerm(searchVal));
    setSearchValue(searchVal);
    const filteredProducts = data?.data.filter((item) =>
      item.title.toLowerCase().includes(searchVal.toLowerCase())
    );
    setFilteredData(filteredProducts);
  };
  console.log("filter", filteredData);
  return (
    <div className=" container-fluid w-full">
      <header className="container-fluid  mx-auto">
        <div className="flex space-x-8 font-semibold py-2 md:px-48">
          <Link to={"/"}>Account</Link>
          <Link to={"/"}>Track Order</Link>
          <Link to={"/"}>Support</Link>
        </div>
        <div className="flex items-center justify-between w-full py-3 border-b border-t px-4 md:px-48">
          <div>
            <img src="/logo.svg" alt="" className="w-24" />
          </div>
          <div className="w-[40%] md:w-[60%]">
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Search"
                onChange={(e) => handleSearch(e)}
              />
              <BiSearch className="text-2xl" />
            </label>
            {searchValue && (
              <ul className=" absolute bg-white p-4">
                {filteredData.map((product) => (
                  <li key={product.id}>
                    <Link to={`/products/${product._id}`} onClick={() => setSearchValue("")}>
                      <div className="flex items-center gap-2 my-2">
                        <img src={product.thumbnail} alt="" className="w-8" />
                        {product.title}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex justify-between items-center md:w-[8%]">
            <CiHeart className="text-4xl cursor-pointer" />
            <div>
              <Link to={"/cart"} className="flex">
                <CiShoppingBasket className="text-4xl cursor-pointer" />
                <span className="bg-red-600 rounded-full h-6 w-6 text-center text-white ">
                  {products.length}
                </span>
              </Link>
            </div>
          </div>
        </div>
        <nav className="mx:px-48 py-4 bg-yellow-500 text-black font-semibold mx-auto">
          <Navbar />
        </nav>
      </header>
      <main className="container mx-auto px-8 mt-2">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Main;
