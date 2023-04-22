import { getAllProducts } from "../../../data/repository/ProductRepository.js";

export async function GetProductsUseCase() {
    return await getAllProducts();
}
