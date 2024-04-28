import { Link } from "react-router-dom";

const Navbar = () => {
  const navigationLink = (
    <>
      <Link to={"/"}>Home</Link>
      <Link to={"/shop"}>Shop</Link>
      <Link to={"/"}>About</Link>
      <Link to={"/"}>Blog</Link>
      <Link to={"/"}>Contact</Link>
    </>
  );

  return <div className="flex space-x-8 mx-auto w-96">{navigationLink}</div>;
};

export default Navbar;
