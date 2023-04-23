import {updateProduct} from "../../../data/repository/ProductRepository.js";

export async function UpdateProductUseCase(id, productData) {
    return await updateProduct(id, productData);
}
