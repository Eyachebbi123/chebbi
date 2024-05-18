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

export const getAllOrders = createAsyncThunk("getAllOrders", async () => { // action 
  
  try {
    const res = await axios.get(`http://localhost:7000/products`);
    console.log(res.data,"resssssssssss");
    return res.data; // action.payload
  } catch (error) {
    console.log(error);
  }
});
export const getOneOrder = createAsyncThunk("getoneOrder", async (id) => { // action 
  
  try {
    const res = await axios.get(`http://localhost:7000/products/findOne/${id}`);
    console.log(res.data,"onnnnn");
    return res.data; // action.payload
  } catch (error) {
    console.log(error);
  }
});