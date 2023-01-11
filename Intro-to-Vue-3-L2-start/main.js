const app = Vue.createApp({
    data: function() {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 0001, color: 'green', colorCode: '#55DC68', image: './assets/images/socks_green.jpg', quantity: 18},
                { id: 0002, color: 'blue', colorCode: '#2E589C',  image: './assets/images/socks_blue.jpg', quantity: 0}
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
        updateVariant(index) {
            this.selectedVariant = index;
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
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity;
        },
        image() {
            return this.variants[this.selectedVariant].image;
        }
    }
})