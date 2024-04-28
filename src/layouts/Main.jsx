import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BiSearch } from "react-icons/bi";
import { CiHeart, CiShoppingBasket } from "react-icons/ci";
import { useSelector } from "react-redux";
import { useGetProductsQuery } from "../features/products/productApi";
import { useState } from "react";

const Main = () => {
  const { products } = useSelector((state) => state.cart);
  const { data } = useGetProductsQuery(undefined);
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const handleSearch = (e) => {
    const searchVal = e.target.value;
    setSearchValue(searchVal);
    const filteredProducts = data?.data.filter((item) =>
      item.name.toLowerCase().includes(searchVal.toLowerCase())
    );
    setFilteredData(filteredProducts);
  };
  return (
    <div className="">
      <header className=" container-fluid  mx-auto">
        <div className="flex space-x-8 font-semibold text-xl py-2 px-48">
          <Link to={"/"}>Account</Link>
          <Link to={"/"}>Track Order</Link>
          <Link to={"/"}>Support</Link>
        </div>
        <div className="flex items-center justify-between w-full py-3 border-b border-t px-48">
          <div>
            <img src="/logo.svg" alt="" />
          </div>
          <div className="w-[60%]">
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
                    <Link to={`/products/${product._id}`}>
                      <div className="flex items-center">
                        <img src={product.image} alt="" className="w-8" />
                        {product.name}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex justify-between items-center w-[8%]">
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
        <nav className="px-48 py-4 bg-yellow-500 text-black font-semibold mx-auto">
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
