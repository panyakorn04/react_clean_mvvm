import React from 'react'
import { GetProductUseCase } from "../../../../domain/usecase/product/GetProduct.js";
import {DeleteProductUseCase} from "../../../../domain/usecase/product/DeleteProduct.js";
import {UpdateProductUseCase} from "../../../../domain/usecase/product/UpdateProduct.js";
export default function ProductDetailViewModel() {

    const [error, setError] = React.useState("");
    const [product, setProduct] = React.useState({
        id: null,
        name: "",
        price: 0
    });

    async function getProduct(id) {
        const { result, error } = await GetProductUseCase(id);
        setError(error)
        setProduct(result)
    }

    async function deleteProduct(id) {
        const { result, error } = await DeleteProductUseCase(id);
        setError(error)
    }

    function onChange(value, prop) {
        setProduct({ ...product, [prop]: value })
    }
    async function updateProduct(id) {
        const { result, error } = await UpdateProductUseCase(id, product);
        setError(error)
    }
    return {
        error,
        onChange,
        updateProduct,
        deleteProduct,
        getProduct,
        ...product,
    }
}
