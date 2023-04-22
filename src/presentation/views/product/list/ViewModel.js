import { useState } from "react"
import { GetProductsUseCase } from '../../../../domain/usecase/product/GetProducts'

export default function ProductListViewModel() {

    const [error, setError] = useState("");
    const [products, setProducts] = useState([]);

    async function getProducts() {
        const { result, error } = await GetProductsUseCase();
        setError(error)
        setProducts(result)
    }
    return {
        error,
        getProducts,
        products,
    }
}