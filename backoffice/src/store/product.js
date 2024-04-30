import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getProducts = createAsyncThunk("getProducts", async (body) => { // action 
  
  try {
    const res = await axios.get(`http://localhost:7000/products/${body}`);
    console.log(res.data,"resssssssssss");
    return res.data; // action.payload
  } catch (error) {
    console.log(error);
  }
});

export const getAllProducts = createAsyncThunk("getAllProducts", async () => { // action 
  
  try {
    const res = await axios.get(`http://localhost:7000/products`);
    console.log(res.data,"resssssssssss");
    return res.data; // action.payload
  } catch (error) {
    console.log(error);
  }
});
export const getOneProduct = createAsyncThunk("getPneProducts", async (id) => { // action 
  
  try {
    const res = await axios.get(`http://localhost:7000/products/findOne/${id}`);
    console.log(res.data,"onnnnn");
    return res.data; // action.payload
  } catch (error) {
    console.log(error);
  }
});











export const productSlice = createSlice({
  name: "product",
  
  initialState: {
    products: [],
    allProducts:[],
    product: {},
  },
  reducers: {}, // t7ottch feha async functions
  extraReducers: (builder) => { // t7ot feha async functions
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(getOneProduct.fulfilled, (state, action) => {
      state.product = action.payload;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.allProducts = action.payload;
    });

   
  },
});
export default productSlice.reducer;
