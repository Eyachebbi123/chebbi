import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getcategories } from "../../../store/category";
import { addProduct } from "../../../store/product";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);
  const [subCategories, setSubCategories] = useState([]);
  const [product, setProduct] = useState({
    productName: "",
    description: "",
    categoryId: "",
    price: "",
    imageURL: null,
    subCategoryId: "",
  });
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);

  useEffect(() => {
    dispatch(getcategories());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "imageURL" && files?.length > 0) {
      setProduct({
        ...product,
        [name]: files[0],
      });
      setImagePreviewUrl(URL.createObjectURL(files[0]));
      uploadImage(files[0]);
    } else {
      setProduct({
        ...product,
        [name]: value,
      });
    }

    if (name === "categoryId") {
      const selectedCategory = categories.find((cat) => cat.id === parseInt(value));
      const subCategoriesForSelected = selectedCategory?.subcategory || [];
      setSubCategories(subCategoriesForSelected);
      setProduct((prevProduct) => ({
        ...prevProduct,
        [name]: value,
        subCategoryId:
          subCategoriesForSelected?.length > 0
            ? subCategoriesForSelected[0].id
            : "",
      }));
    }
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://localhost:7000/upload", formData);
      setProduct((prev) => ({
        ...prev,
        imageURL: res.data.path,
      }));
    } catch (error) {
      console.error("Image upload failed:", error);
    }
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Convert price to number before dispatching
      dispatch(addProduct({...product, price: +product.price}));
      navigate("/products");
    } catch (error) {
      console.error("Failed to add product:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex flex-column gap-3 align-items-center my-3"
    >
      {!imagePreviewUrl && (
        <input
          required
          type="file"
          name="imageURL"
          onChange={handleChange}
        />
      )}

      {imagePreviewUrl && (
        <img
          src={imagePreviewUrl}
          alt="Image preview"
          className="my-3"
          style={{ maxHeight: "300px" }}
        />
      )}
      <TextField
        required
        label="Nom du produit"
        className="col-10"
        name="productName"
        value={product.productName}
        onChange={handleChange}
      />
      <TextField
        required
        label="Description"
        className="col-10"
        name="description"
        value={product.description}
        onChange={handleChange}
      />
      <FormControl className="col-10" required>
        <InputLabel id="category-label">Catégorie</InputLabel>
        <Select
          labelId="category-label"
          id="category"
          name="categoryId"
          value={product.categoryId}
          onChange={handleChange}
        >
          <MenuItem value="" disabled>
            Choisissez une catégorie
          </MenuItem>
          {categories?.length > 0 ? (
            categories.map((elem) => (
              <MenuItem key={elem.id} value={elem.id}>
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

      <FormControl className="col-10" required>
        <InputLabel id="subcategory-label">Sous-catégorie</InputLabel>
        <Select
          labelId="subcategory-label"
          id="subcategory"
          name="subCategoryId"
          value={product.subCategoryId}
          onChange={handleChange}
          disabled={!subCategories?.length}
        >
          <MenuItem value="">Choisissez une sous-catégorie</MenuItem>
          {subCategories?.length > 0 ? (
            subCategories.map((elem) => (
              <MenuItem key={elem.id} value={elem.id}>
                {elem.name}
              </MenuItem>
            ))
          ) : (
            <MenuItem value="">Aucune sous-catégorie disponible</MenuItem>
          )}
        </Select>
      </FormControl>
      <TextField
        required
        label="Prix"
        className="col-10"
        type="number"
        name="price"
        value={product.price}
        onChange={handleChange}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className="col-10"
      >
        Ajouter le produit
      </Button>
    </form>
  );
}
