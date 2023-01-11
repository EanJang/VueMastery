const app = Vue.createApp({
    data: function() {
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            inventory: 8,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 0001, color: 'green'},
                { id: 0002, color: 'blue'}
            ],
            cart: 0
        }
    },
    methods: {
        addToCart() {
            this.cart++;
        }
    },
})