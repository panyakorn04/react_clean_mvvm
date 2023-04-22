import React from 'react'
import { useNavigate, useParams } from "react-router-dom";

function ProductDetail() {
    let navigate = useNavigate();
    let { id } = useParams();
    return (
        <div>ProductDetail</div>
    )
}

export default ProductDetail
