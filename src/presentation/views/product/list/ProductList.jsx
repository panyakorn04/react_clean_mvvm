import React from 'react'
import { useNavigate } from "react-router-dom";
import useViewModel from "./ViewModel"

import Button from "../../../components/Button.jsx"
import List from "../../../components/List.jsx";

function ProductList() {
    let navigate = useNavigate();
    const { products, getProducts, goToAddProduct, goToProductDetail } = useViewModel();

    React.useEffect(() => {
        getProducts()
    }, [])
    return (
        <div className="page">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: 10 }}>
                <h2>Product List</h2>
                <Button title={"New"} onClick={() => navigate(`/product/new`)} />
            </div>
            <List data={products} onRowClick={(id) => navigate(`/product/detail/${id}`)} />
        </div>
    )
}

export default ProductList
