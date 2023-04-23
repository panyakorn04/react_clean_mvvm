import {create, deleteById, getAll, getById, update} from "../datasourse/ProductLocalStorageDataSource.js";

export  async  function getAllProducts() {
    const { result, error } = await getAll();
    if (error) {
              return Promise.resolve({ error: error, result: null });
       }
         return Promise.resolve({ error: null, result: result });
}

export async function getProductById(id) {
    const { result, error } = await getById(id);
    if (error) {
        return Promise.resolve({ error: error, result: null });
    }
    return Promise.resolve({ error: null, result: result });
}
export async function deleteProductById(id) {
    const { result, error } = await deleteById(id);
    if (error) {
        return Promise.resolve({ error: error, result: null });
    }
    return Promise.resolve({ error: null, result: result });
}

export async function updateProduct(id, data) {
    const { result, error } = await update(id, data);
    return { result, error }
}
export async function createProduct(data) {
    const { result, error } = await create(data);
    return { result, error }
}