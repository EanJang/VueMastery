const app = Vue.createApp({
    data: function() {
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            inventory: 8,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 0001, color: 'green',  image: './assets/images/socks_green.jpg'},
                { id: 0002, color: 'blue',  image: './assets/images/socks_blue.jpg'}
            ],
            cart: 0
        }
    },
    methods: {
        addToCart() {
            this.cart++;
        },
        removeFromCart() {
            this.cart--;
        },
        updateImage(variantImage) {
            this.image = variantImage;
        }
    },
})