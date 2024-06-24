import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneProduct, patchProduct } from '../../../store/product';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { getcategories } from '../../../store/category';

export default function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);
  useEffect(() => {
    dispatch(getcategories());
  }, [dispatch]);

  const product = useSelector((state) => state.product.product);
  const [isEditMode, setIsEditMode] = useState(false);
  const [productDetails, setProductDetails] = useState({
    productName: '',
    description: '',
    categoryId: '',
    price: '',
    imageURL: ''
  });
  const [imagePreviewUrl, setImagePreviewUrl] = useState('');

  useEffect(() => {
    dispatch(getOneProduct(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (product) {
      setProductDetails({
        productName: product.productName,
        description: product.description,
        categoryId: product.categoryId,
        price: product.price,
        imageURL: product.imageURL
      });
      setImagePreviewUrl(product.imageURL);
    }
  }, [product]);
const navigate=useNavigate()
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'imageURL' && files.length > 0) {
      const file = files[0];
      setProductDetails({
        ...productDetails,
        imageURL: file
      });
      setImagePreviewUrl(URL.createObjectURL(file));
    } else {
      setProductDetails({
        ...productDetails,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      ...productDetails,
      id
    };

    dispatch(patchProduct({ id, body: updatedProduct })).then(() => {
      setIsEditMode(false);
      navigate("/products")
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex flex-column gap-3 align-items-center my-3"
    >
      {!isEditMode && (
        <Button
          variant="contained"
          color="primary"
          className="col-10"
          onClick={() => setIsEditMode(true)}
        >
          Edit
        </Button>
      )}
      {imagePreviewUrl && (
        <img
          src={imagePreviewUrl}
          alt="Image preview"
          className="my-3"
          style={{ maxHeight: '300px' }}
        />
      )}
      {isEditMode && (
        <input
          required
          id="outlined-required"
          type="file"
          name="imageURL"
          onChange={handleChange}
        />
      )}
      <TextField
        required
        id="outlined-required"
        label="Nom du produit"
        className="col-10"
        name="productName"
        value={productDetails.productName}
        onChange={handleChange}
        disabled={!isEditMode}
      />
      <TextField
        required
        id="outlined-required"
        label="Description"
        className="col-10"
        name="description"
        value={productDetails.description}
        onChange={handleChange}
        disabled={!isEditMode}
      />
      <FormControl className="col-10" required>
        <InputLabel id="category-label">Catégorie</InputLabel>
        <Select
          labelId="category-label"
          id="category"
          name="categoryId"
          value={productDetails.categoryId}
          onChange={handleChange}
          disabled={!isEditMode}
        >
          <MenuItem value="" disabled>
            Choisissez une catégorie
          </MenuItem>
          {categories?.length > 0 ? (
            categories.map((elem, index) => (
              <MenuItem key={index} value={elem.id}>
                {elem.name}
              </MenuItem>
            ))
          ) : (
            <MenuItem value="" disabled>
              Aucune catégorie disponible
            </MenuItem>
          )}
        </Select>
      </FormControl>
      <TextField
        required
        id="outlined-required"
        label="Prix"
        className="col-10"
        type="number"
        name="price"
        value={productDetails.price}
        onChange={handleChange}
        disabled={!isEditMode}
      />
      {isEditMode && (
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="col-10"
        >
          Save
        </Button>
      )}
      {isEditMode && (
        <Button
          type="button"
          variant="contained"
          color="secondary"
          className="col-10"
          onClick={() => {
            setIsEditMode(false);
            setProductDetails({
              productName: product.productName,
              description: product.description,
              categoryId: product.categoryId,
              price: product.price,
              imageURL: product.imageURL
            });
            setImagePreviewUrl(product.imageURL);
          }}
        >
          Cancel
        </Button>
      )}
    </form>
  );
}
