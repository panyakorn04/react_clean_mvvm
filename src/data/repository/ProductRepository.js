import {create, getAll} from "../datasourse/ProductLocalStorageDataSource.js";

export  async  function getAllProducts() {
    const { result, error } = await getAll();
    if (error) {
              return Promise.resolve({ error: error, result: null });
       }
         return Promise.resolve({ error: null, result: result });
}

export async function createProduct(data) {
    const { result, error } = await create(data);
    return { result, error }
}