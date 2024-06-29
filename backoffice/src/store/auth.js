  import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

  import axios from "axios";

  export const me = createAsyncThunk("auth/me", async () => {
    try {
      const tokenn = await localStorage.getItem("token");
      const token = JSON.parse(tokenn);
      console.log(token, "tokenfrom me");
      const config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };

      const response = await axios.get(
        "http://localhost:7000/auth/me",
        config
      );
      console.log(response.data,"res");
      return response.data;
    } catch (e) {
      console.log(e);
    }
  });

  export const login = createAsyncThunk("login", async (body, { dispatch, rejectWithValue }) => {
    try {
      const res = await axios.post("http://localhost:7000/auth/login", body);
      await localStorage.setItem("token", JSON.stringify(res.data));
      dispatch(me(res.data.authorization));
      return res.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  });
  

  export const logout = createAsyncThunk("logout", async () => {
    await localStorage.removeItem("token");
  });

  export const authSlice = createSlice({
    name: "auth",
    initialState: {
      me: null,
    },
    reducers: {},
    extraReducers(builder) {
      builder.addCase(me.fulfilled, (state, action) => {
        state.me = action.payload;
      });
      builder.addCase(logout.fulfilled, (state, action) => {
        state.me = null;
      });
    },
  });

  export default authSlice.reducer;
