import { useDispatch } from "react-redux";
import "./App.css";
import Main from "./layouts/Main";
import { useEffect } from "react";
import { setLoading, setUser } from "./features/user/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase.config";

function App() {
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
    <>
      <Main />
    </>
  );
}

export default App;
