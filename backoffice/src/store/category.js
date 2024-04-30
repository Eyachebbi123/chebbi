import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getcategories = createAsyncThunk("getCategories", async () => { // action 
  try {
    const res = await axios.get(`http://127.0.0.1:7000/categories`);
    console.log(res.data);
    return res.data; // action.payload
  } catch (error) {
    console.log(error);
  }
});
export const getcategory = createAsyncThunk("getcategory", async (id) => { // action 
  try {
    const res = await axios.get(`http://127.0.0.1:7000/categories/${id});`);
    return res.data; // action.payload
  } catch (error) {
    console.log(error);
  }
});











export const categorySlice = createSlice({
  name: "category",
  initialState: {
   categories: [],
 
    category: {},
  },
  reducers: {}, // t7ottch feha async functions
  extraReducers: (builder) => { // t7ot feha async functions
    builder.addCase(getcategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
    builder.addCase(getcategory.fulfilled, (state, action) => {
      state.category = action.payload;
    });



  },
});
export default categorySlice.reducer;