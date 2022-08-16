var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        subproduct: 'Medias',
        description: 'A pair of warm, fuzzy socks',
        imagen: './assets/greenSocks.jpg',
        url: 'https://vuemastery.com',
        inStock: true,
        inventory: 100,
        onSale: true,
        detalles: ["80% algodon", "20% polyester", "Gender neutral"],
        talles: ["Large", "Medium", "Small"],
        variantes: [
            {
                variantId: 2234,
                variantColor: "green" 
            },
            {
                variantId: 2235,
                variantColor: "blue" 
            }
        ]
    }
})
