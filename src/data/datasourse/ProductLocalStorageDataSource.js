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

export function getById(id) {
    try {
        let data = [];
        let dataString = localStorage.getItem(COLLECTION)
        if (dataString) {
            data = JSON.parse(dataString)
        }
        let product = data.find(item => item.id === id)
        return Promise.resolve({ error: null, result: product })
    } catch (err) {
        return Promise.resolve({ error: err.message, result: null })
    }
}

export async function deleteById(id) {
    try {
        let { error , result } = await getAll()
        if (error) {
            return Promise.resolve({ error: error, result: null })
        }
        let data = result;
        data = data.filter(item => item.id !== id)
        localStorage.setItem(COLLECTION, JSON.stringify(data))
        return Promise.resolve({ error: null, result: true })
    } catch (err) {
        return Promise.resolve({ error: err.message, result: null })
    }
}

export  async function update(id,product) {
    let { error, result } = await getAll()
    let data = result;
    data = data.map(item => {
        if (item.id === id) {
            return product
        }
        return item
    })
    localStorage.setItem(COLLECTION, JSON.stringify(data))
    return Promise.resolve({ error: null, result: true })
}

export async function create(productData) {
    let { error, result } = await getAll()
    let data = result;
    productData.id = (new Date().getTime()).toString()
    data.push(productData)
    localStorage.setItem(COLLECTION, JSON.stringify(data))
    return Promise.resolve({ error: null, result: true })
}
