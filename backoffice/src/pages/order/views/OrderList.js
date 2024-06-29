import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import TextField from "@mui/material/TextField";
import Autocomplete from "../../../components/Autocomplete";
import { FcFullTrash } from "react-icons/fc";
import { IoEye } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function OrderList() {
  const categories = useSelector((state) => state.order?.order);
  const [rows, setRows] = useState([]);
  const dispatch = useDispatch();
  console.log(rows, "rows");
  useEffect(() => {
    const res = axios
      .get("http://localhost:7000/orders")
      .then((res) => setRows(res.data))
      .catch((err) => console.log(err));
  }, [dispatch]);

  // useEffect(() => {
  //     setRows(categories)
  // }, [categories])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const navigate=useNavigate()
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 150,
      editable: true,
      valueGetter: (value) => {
        console.log(value, "val");
        return value.fullName;
      },
    },
    {
      field: "price",
      headerName: "Price",
      width: 150,
      editable: true,
    },

    {
      field: "address",
      headerName: "Address",
      width: 150,
      editable: true,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 150,
      editable: true,
    },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 150,
      renderCell: (params) => (
        <>
          <GridActionsCellItem
            icon={<FcFullTrash />}
            label="Delete"
            onClick={() => console.log("Delete clicked")}
          />
          <GridActionsCellItem
            icon={<IoEye />}
            label="Print"
            onClick={() => navigate(`OrderDetail/${params.row.id}`)}
          />
        </>
      ),
    },
  ];
  return (
    <div>
      <div className="d-flex justify-content-end">
        {/* <button className="btn btn-primary my-4" onClick={handleShow}>
          Add Order
        </button> */}
      </div>
      <Box className="mt-5" sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          disableSelectionOnClick
        />
      </Box>

      <Modal
        className="mt-5"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Order </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column gap-3 align-items-center my-3">
          <TextField
            required
            id="outlined-required"
            label="Product Name"
            className="col-10 "
          />
          <div className="col-10 ">
            <Autocomplete />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
