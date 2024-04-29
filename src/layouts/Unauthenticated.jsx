import { Outlet } from "react-router-dom";

const Unauthenticated = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default Unauthenticated;
