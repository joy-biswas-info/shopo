import { PropTypes } from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

export const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (user) {
    return children;
  }
  if (loading) {
    return (
      <div className="flex flex-col gap-4 w-full h-[100vh]">
        <div className="skeleton h-[60%] w-full"></div>
        <div className="skeleton h-12 w-28"></div>
        <div className="skeleton h-12 w-full"></div>
        <div className="skeleton h-12 w-full"></div>
      </div>
    );
  }
  return <Navigate to={"/login"}></Navigate>;
};

PrivetRoute.propTypes = { children: PropTypes.node };
