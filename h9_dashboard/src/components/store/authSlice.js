import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { email: null, token: null },
  reducers: {
    setAuth: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.email = null;
      state.token = null;
    },
  },
});

export const { setAuth, logout } = authSlice.actions;
export default authSlice.reducer;