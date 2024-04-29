import { Link } from "react-router-dom";

const Navbar = () => {
  const navigationLink = (
    <>
      <Link to={"/"}>Shop</Link>
      <Link to={"/"}>Contact</Link>
    </>
  );

  return <div className="flex space-x-8 mx-auto w-96">{navigationLink}</div>;
};

export default Navbar;
