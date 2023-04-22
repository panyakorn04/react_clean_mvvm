const COLLECTION = "PRODUCTS";

export function getAll() {
    try {
        let data = [];
        let dataString = localStorage.getItem(COLLECTION)
        if (dataString) {
            data = JSON.parse(dataString)
        }
        return Promise.resolve({ error: null, result: data })

    } catch (err) {
        return Promise.resolve({ error: err.message, result: null })
    }
}

export async function create(productData) {
    let { error, result } = await getAll()
    let data = result;
    productData.id = (new Date().getTime()).toString()
    data.push(productData)
    localStorage.setItem(COLLECTION, JSON.stringify(data))
    return Promise.resolve({ error: null, result: true })
}
