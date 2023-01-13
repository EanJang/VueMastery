app.component('product-display', {
    props: {
        premium: {
            //prop validation
            type: Boolean,
            required: true
        }
    },
    template: 
    /*html*/
    `<div class="product-display">
        <div class="product-container">
            <div class="product-image">
            <!-- image goes here -->
            <img :class="{ 'out-of-stock-img' : !inStock}" :src="image">
        </div>
        <div class="product-info">
        <h1>{{ title }}</h1>
        <p>{{ sale }}</p>
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <p>Shipping: {{ shipping }}</p>
        
        <product-details :details="details"></product-details>

        <div 
            v-for="(variant, index) in variants" 
            :key="variant.id" 
            @mouseover="updateVariant(index)"
            class="color-circle"
            :style="{backgroundColor: variant.colorCode}"
        ></div>
        <button 
            class="button" 
            :class="{ disabledButton: !inStock }"
            :disabled="!inStock"
            @click="addToCart"
        >Add to Cart</button>
        <button class="button" 
            @click="removeFromCart">Remove Item</button>
        </div>
        </div>
        <review-list v-if="reviews.length" :reviews="reviews"></review-list>
        <review-form @review-submitted="addReview"></review-form>
    </div>`,
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
            reviews: []
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id);
        },
        removeFromCart() {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].id);
        },
        updateVariant(index) {
            this.selectedVariant = index;
        },
        addReview(review) {
            this.reviews.push(review);
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
        shipping() {
            if (this.premium) {
                return 'Free';
            } 
            return 2.99;
        },
        image() {
            return this.variants[this.selectedVariant].image;
        }
    }
})