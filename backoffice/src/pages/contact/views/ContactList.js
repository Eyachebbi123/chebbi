import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import TextField from "@mui/material/TextField";
import Autocomplete from "../../../components/Autocomplete";
import { FcFullTrash } from "react-icons/fc";
import { GridActionsCellItem } from "@mui/x-data-grid/components/cell/GridActionsCellItem";
import { IoEye } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { getcategories } from "../../../store/category";
import axios from "axios";
export default function ContactList() {

  const [rows, setRows] = useState([]);
  console.log(rows, "rows");
  const dispatch = useDispatch();
  React.useEffect(() => {
      axios.get("http://localhost:7000/contact").then((res) =>setRows(res.data)).catch((err) => console.log(err))

  }, [])
  // React.useEffect(() => {

  //     setRows(categories)
  // }, [rows])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "fullName",
      width: 150,
      editable: true,
    },
    {
      field: "email",
      headerName: "email",
      width: 150,
      editable: true,
    },
    {
      field: "phone",
      headerName: " phone",
      width: 150,
      editable: true,
    },
    {
      field: "message",
      headerName: "Message",
      width: 300,
      editable: true,
    },


    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      getActions: (params) => [
        // <GridActionsCellItem icon={<FcFullTrash />} label="Delete" />,
        <GridActionsCellItem icon={<IoEye />} label="Print" />,
      ],
    },
  ];

  return (
    <div className="py-5">
     
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
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
          <Modal.Title>Add Category </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column gap-3 align-items-center my-3">
          <TextField
            required
            id="outlined-required"
            label="Client Name"
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
