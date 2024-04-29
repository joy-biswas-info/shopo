import { FaSignOutAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../features/user/userSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };
  const navigationLink = (
    <>
      <Link to={"/"}>Shop</Link>
      <Link to={"/contact"}>Contact</Link>
      {!user.email ? (
        <Link to={"/login"}>Login</Link>
      ) : (
        <button className="flex items-center gap-2" onClick={() => handleLogout()}>
          Log Out <FaSignOutAlt />
        </button>
      )}
    </>
  );

  return <div className="flex space-x-8 mx-auto w-96">{navigationLink}</div>;
};

export default Navbar;
