import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../config/firebase.config";

const initialState = {
  user: { email: null },
  isLoading: false,
  isError: false,
  error: null,
};

export const createUser = createAsyncThunk("user/createUser", async ({ email, password }) => {
  const data = await createUserWithEmailAndPassword(auth, email, password);
  return data.user.email;
});

export const loginUser = createAsyncThunk("user/loginUser", async ({ email, password }) => {
  const data = await signInWithEmailAndPassword(auth, email, password);
  return data.user.email;
});

export const logOut = createAsyncThunk("user/logOut", async () => {
  signOut(auth).then(() => {
    console.log("Log Out");
  });
});

export const userSigninWithGoogle = createAsyncThunk("user/signInWithGoogle", async () => {
  console.log("here");
  const googleProvider = new GoogleAuthProvider();
  const data = signInWithPopup(auth, googleProvider);
  return data.user.email;
});

const userSlice = createSlice({
  name: "user ",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user.email = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.user.email = action.payload;
        state.isLoading = false;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.user.email = null;
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user.email = action.payload;
        state.isLoading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.user.email = null;
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(userSigninWithGoogle.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(userSigninWithGoogle.fulfilled, (state, action) => {
        state.user.email = action.payload;
        state.isLoading = false;
      })
      .addCase(userSigninWithGoogle.rejected, (state, action) => {
        state.user.email = null;
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(logOut.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user.email = null;
        state.isLoading = false;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export const { setUser, setLoading } = userSlice.actions;

export default userSlice.reducer;
