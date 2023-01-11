const app = Vue.createApp({
    data: function() {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            image: './assets/images/socks_green.jpg',
            inventory: 8,
            inStock: true,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 0001, color: 'green', colorCode: '#55DC68', image: './assets/images/socks_green.jpg'},
                { id: 0002, color: 'blue', colorCode: '#2E589C',  image: './assets/images/socks_blue.jpg'}
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
    computed: {
        title() {
            return this.brand + ' ' + this.product;
        },
        sale() {
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' is on sale.';
            }
            return '';
        }
    }
})