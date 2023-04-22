import React from 'react'
import { useNavigate } from "react-router-dom";
import useViewModel from "./ViewModel"

import Button from "../../../components/Button"
import TextInput from "../../../components/TextInput"
import List from "../../../components/List"

const ProductNew = () => {
    let navigate = useNavigate();
    const { name, price, onChange, saveProduct } = useViewModel();

    return (
        <div className="page">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: 10 }}>
                <h2>New Product</h2>
                <Button title={"Save"} onClick={() => {
                    saveProduct()
                    navigate(-1)
                }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", padding: 30 }}>
                <TextInput placeholder="Product Name" autoFocus={true} value={name} onChange={e => onChange(e.target.value, "name")} />
                <TextInput placeholder="Product Price" type="number" value={price} onChange={e => onChange(e.target.value, "price")} />
            </div>
        </div>
    )
}
export default ProductNew
