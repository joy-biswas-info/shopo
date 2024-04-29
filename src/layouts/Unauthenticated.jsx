import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { setLoading, setUser } from "../features/user/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../config/firebase.config";

const Unauthenticated = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default Unauthenticated;
