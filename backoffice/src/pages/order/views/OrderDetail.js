import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import axios from "axios";
import { FcFullTrash } from "react-icons/fc";
import { IoEye } from "react-icons/io5";

export default function OrderDetail() {
  const [orderDetails, setOrderDetails] = useState(null);
  const { id } = useParams();

  const getOrderDetails = () => {
    axios
      .get(`http://localhost:7000/orders/${id}`)
      .then((res) => setOrderDetails(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getOrderDetails();
  }, [id]);

  if (!orderDetails) return <p>Loading...</p>;

  const orderItems = orderDetails.orderItems.map((item, index) => ({
    id: index,
    productName: item.product.productName,
    price: item.product.price,
    quantity: item.quantity,
  }));

  const columns = [
    { field: "productName", headerName: "Product Name", width: 150 },
    { field: "price", headerName: "Price", width: 150 },
    { field: "quantity", headerName: "Quantity", width: 150 },
  ];

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <h2>Order Details</h2>
      <p><strong>User:</strong> {orderDetails.user.fullname} ({orderDetails.user.email})</p>
      <p><strong>Address:</strong> {orderDetails.address}</p>
      <p><strong>Phone:</strong> {orderDetails.phone}</p>
      <DataGrid
        rows={orderItems}
        columns={columns}
        pageSize={5}
        disableSelectionOnClick
      />
    </Box>
  );
}
