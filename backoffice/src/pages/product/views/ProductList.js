import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Autocomplete from "../../../components/Autocomplete";
import { FcFullTrash } from "react-icons/fc";
import { IoEye } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getProducts,
  removeProduct,
} from "../../../store/product";
import { useNavigate } from "react-router-dom";
import { gridClasses } from "@mui/material";
import { toast } from "react-toastify";
import { FaTrash } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
export default function ProductList() {
  const products = useSelector((state) => state.product?.allProducts);
  const [rows, setRows] = useState([]);
  // console.log(categories, "categ");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  const navigate = useNavigate();
  React.useEffect(() => {
    setRows(products);
  }, [products]);
  console.log(products, "products");
  console.log(rows, "rows");
  console.log(products, "products");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const columns = [
    {
      field: "imageURL",
      headerName: "imageURL",
      width: 70,
      editable: true,
      renderCell: (params) => (
        <img
          style={{ objectFit: "cover", width: "35px", height: "35px" }}
          src={params?.row?.imageURL}
          width={35}
          height={35}
        />
      ),
    },
    // { field: 'id', headerName: 'ID', width: 90 },
    {
      field: "productName",
      headerName: "Name",
      width: 150,
      editable: true,
    },
    {
      field: "price",
      headerName: "Price",
      width: 150,
      editable: true,
    },
    {
      field: "description",
      headerName: "Description",
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
            icon={<FaTrash />}
            label="Delete"
            onClick={async () => {
              try {
                dispatch(removeProduct(params.row.id));
                toast.success(`product deleted successfully`);
              } catch (err) {
                console.log(err);
                toast.error(err);
              }
            }}
          />
          <GridActionsCellItem
            icon={<MdModeEditOutline />}
            label="Print"
            onClick={() => navigate(`product-detail/${params.row.id}`)}
          />
        </>
      ),
    },
  ];

  return (
    <div>
      <div className="d-flex justify-content-end">
        <button
          className="btn btn-primary my-4"
          onClick={() => navigate("add-product")}
        >
          Add Product
        </button>
      </div>
      <Box sx={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          getRowId={(row) => row.id}
          getRowSpacing={(params) => ({
            top: params.isFirstVisible ? 0 : 5,
            bottom: params.isLastVisible ? 0 : 5,
          })}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          sx={{
            [`& .${gridClasses.row}`]: {
              bgcolor: "#daeaf088",
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
}
