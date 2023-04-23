import {deleteProductById} from "../../../data/repository/ProductRepository.js";


export async function DeleteProductUseCase(id) {
    return await deleteProductById(id);
}