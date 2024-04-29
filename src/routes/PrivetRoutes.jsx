import { PropTypes } from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivetRoute = ({ children }) => {
  const { user, isLoading } = useSelector((state) => state.user);
  const { pathname } = useLocation();
  if (user.email) {
    return children;
  }
  if (isLoading) {
    return (
      <div className="flex flex-col gap-4 w-full h-[100vh]">
        <div className="skeleton h-[60%] w-full"></div>
        <div className="skeleton h-12 w-28"></div>
        <div className="skeleton h-12 w-full"></div>
        <div className="skeleton h-12 w-full"></div>
      </div>
    );
  }
  return <Navigate to={"/login"} state={{ path: pathname }}></Navigate>;
};

PrivetRoute.propTypes = { children: PropTypes.node };
