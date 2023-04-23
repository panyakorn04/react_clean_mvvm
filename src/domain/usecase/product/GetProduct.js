import {getProductById} from "../../../data/repository/ProductRepository.js";


export async function GetProductUseCase(id) {
    return await getProductById(id);
}
