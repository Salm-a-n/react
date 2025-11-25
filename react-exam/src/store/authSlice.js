import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    setUserFromLocalStorage: (state) => {
      const savedUser = localStorage.getItem("user");
      if (savedUser) {
        state.user = JSON.parse(savedUser);
      }
    },
    removeUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    }
  }
});

export const { setUser, setUserFromLocalStorage, removeUser } = authSlice.actions;
export default authSlice.reducer;