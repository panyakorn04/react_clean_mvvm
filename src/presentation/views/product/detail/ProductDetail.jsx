import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import useViewModel from "./ViewModel"
import TextInput from "../../../components/TextInput.jsx";
import Button from "../../../components/Button.jsx";
function ProductDetail() {
    let navigate = useNavigate();
    let { id } = useParams();
    const { name, price, getProduct,deleteProduct ,updateProduct,onChange } = useViewModel();

    React.useEffect(() => {
        getProduct(id)
    }
    , [])

    return (
        <div className="page">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: 10 }}>
                <h2>Edit Product</h2>
                <div style={{ display: "flex" }}>
                    <Button
                        title="Delete"
                        onClick={() => {
                            deleteProduct(id)
                            navigate(-1)
                        }} />
                    <Button title="Update" onClick={() => {
                        updateProduct(id)
                        navigate(-1)
                    }} />
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", padding: 30 }}>
                <TextInput placeholder="Product Name" autoFocus={true} value={name} onChange={e => onChange(e.target.value, "name")}  />
                <TextInput placeholder="Product Price" type="number" value={price} onChange={e => onChange(e.target.value,"price")} />
            </div>
        </div>
    )
}

export default ProductDetail
