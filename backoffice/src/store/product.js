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
export const addProduct = createAsyncThunk("addProduct", async (body,{dispatch}) => { // action 
  
  try {
    const res = await axios.post(`http://localhost:7000/products`,body);
    dispatch(getAllProducts())
    console.log(res.data,"added");
    return res.data; // action.payload
  } catch (error) {
    console.log(error);
  }
});
export const removeProduct = createAsyncThunk("addProduct", async (body,{dispatch}) => { // action 
  
  try {
    const res = await axios.delete(`http://localhost:7000/products/${body}`);
    dispatch(getAllProducts())
    console.log(res.data,"deleted");
    return res.data; // action.payload
  } catch (error) {
    console.log(error);
  }
});

export const getAllProducts = createAsyncThunk("getAllProducts", async () => { // action 
  
  try {
    const res = await axios.get(`http://localhost:7000/products`);
    console.log(res.data,"getAllPro");
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

export const patchProduct = createAsyncThunk("patchProducts", async (args,{dispatch}) => { // action 
  const {id, body} = args
  try {
    const res = await axios.patch(`http://localhost:7000/products/${id}`,body);
    console.log(res.data,"onnnnn");
    dispatch(getOneProduct())
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
