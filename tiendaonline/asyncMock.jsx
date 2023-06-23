const products = [
    {
        id: "1",
        name: "iphone 11",
        price: 2000,
        category: "celular",
        img:  'https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png' ,
        stock: 25,
        description: "es un celular"

    },
    { id: "2", name: "samsung", price: 700, category: "celular", img: "https://arwan.com.ar/wp-content/uploads/2023/03/nb_SAMSUNG-CELULAR-GALAXY-S23-ULTRA-256-12GB-8GB-GREEN_ver_be9d1e736831717a40154f363d28dc17.jpg", stock: 23, description: "celular samsung" }
]
 export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        
        }, 500)
    })
 }

 export const getProductsById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
 }


