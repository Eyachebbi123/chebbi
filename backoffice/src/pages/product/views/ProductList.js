
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import { DataGrid } from '@mui/x-data-grid';
// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '../../../componenets/Autocomplete';
// import { FcFullTrash } from "react-icons/fc";
// import { GridActionsCellItem } from '@mui/x-data-grid/components/cell/GridActionsCellItem';
// import { IoEye } from "react-icons/io5";
// import { useDispatch, useSelector } from "react-redux"

// import product, { getProducts } from '../../../store/product';
// export default function ProductList() {
//   const categories = useSelector((state) => state.product?.product)
//   const [rows, setRows] = useState([])
//   console.log(product, "produc");
//   const dispatch = useDispatch()
//   React.useEffect(() => {
//       dispatch(getProducts())

//   }, [])
//   React.useEffect(() => {

//       setRows(product)
//   }, [rows])
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);



//   const columns = [
//       { field: 'id', headerName: 'ID', width: 90 },
//       {
//           field: 'name',
//           headerName: 'Name',
//           width: 150,
//           editable: true,
//       },
    
//       {
//           field: 'actions',
//           type: 'actions',
//           headerName: 'Actions',
//           getActions: (params) => [
//               <GridActionsCellItem icon={<FcFullTrash />} label="Delete" />,
//               <GridActionsCellItem icon={<IoEye />} label="Print" />,
//           ]
//       }

//   ];


//   return (
//     <div>
//     <div className='d-flex justify-content-end'>

//         <button className='btn btn-primary my-4' onClick={handleShow}>Add Product</button>
//     </div>
//     <Box sx={{ height: 400, width: '100%' }}>
//         <DataGrid
//             rows={rows}
//             columns={columns}
//             initialState={{
//                 pagination: {
//                     paginationModel: {
//                         pageSize: 5,
//                     },
//                 },
//             }}
//             pageSizeOptions={[5]}
//             disableRowSelectionOnClick
//         />
//     </Box>



//     <Modal
//         className='mt-5'
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//     >
//         <Modal.Header closeButton>
//             <Modal.Title>Add Product </Modal.Title>
//         </Modal.Header>
//         <Modal.Body className='d-flex flex-column gap-3 align-items-center my-3'>
//             <TextField
//                 required
//                 id="outlined-required"
//                 label="Product Name"
//                 className='col-10 '

//             />
//             <div className='col-10 '>

//                 <Autocomplete />
//             </div>
//         </Modal.Body>
//         <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//                 Close
//             </Button>
//             <Button variant="primary">Understood</Button>
//         </Modal.Footer>
//     </Modal>




// </div>
// )
// }
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TextField from '@mui/material/TextField';
import Autocomplete from '../../../components/Autocomplete';
import { FcFullTrash } from "react-icons/fc";
import { IoEye } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts, getProducts } from '../../../store/product';
import { useNavigate } from 'react-router-dom';

export default function ProductList() {

    const products = useSelector((state) => state.product?.allProducts)
    const [rows, setRows] = useState([])
    // console.log(categories, "categ");
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllProducts())

    }, [])
    const navigate =useNavigate()
    React.useEffect(() => {

        setRows(products)
    }, [rows])
    console.log(rows,"rows");
    console.log(products,"products");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const columns = [
        {
            field: 'Image',
            headerName: 'Image',
            width: 70,
            editable: true,
            renderCell: (params) => (<img src={params.row.imageURL} width={35} height={35}/>)
            
        },
        // { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'productName',
            headerName: 'Name',
            width: 150,
            editable: true,
        },
        {
          field: 'price',
          headerName: 'Price',
          width: 150,
          editable: true,
      },
      {
        field: 'description',
        headerName: 'Description',
        width: 150,
        editable: true,
    },
    
        {
            field: 'actions',
            headerName: 'Actions',
            sortable: false,
            width: 150,
            renderCell: (params) => (
                <>
                    <GridActionsCellItem
                        icon={<FcFullTrash />}
                        label="Delete"
                        onClick={() => console.log('Delete clicked')}
                    />
                    <GridActionsCellItem
                        icon={<IoEye />}
                        label="Print"
                        onClick={() => console.log('Print clicked')}
                    />
                </>
            )
        }
    ];

    return (
        <div>
            <div className='d-flex justify-content-end'>
                <button className='btn btn-primary my-4' onClick={handleShow}>Add Product</button>
            </div>
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    disableSelectionOnClick
                />
            </Box>

            <Modal
                className='mt-5'
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Product </Modal.Title>
                </Modal.Header>
                <Modal.Body className='d-flex flex-column gap-3 align-items-center my-3'>
                    <TextField
                        required
                        id="outlined-required"
                        label="Product Name"
                        className='col-10 '
                    />
                    <div className='col-10 '>
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
    )
}

