import { defineStore } from "pinia";

export const useHomeStore = defineStore('home', {
  state: () => ({
    products: null,
    cart: []
  }),
  
  getters: {
    cartTotalPrice: (state) => {
      return state.cart.reduce((total, item) => total + item.harga * item.quantity, 0)
    }
  },
  
  actions: {
    setProducts(products) {
      this.products = products
    },
    
    addToCart(product) {
      const existingProduct = this.cart.find((item) => item.id_produk === product.id_produk)
      if (existingProduct) {
        existingProduct.quantity++
      } else {
        this.cart.push({ ...product, quantity: 1 })
      }
    },
  
    removeFromCart(product) {
      const existingProduct = this.cart.find((item) => item.id_produk === product.id_produk)
      
      if (existingProduct.quantity > 1) {
        existingProduct.quantity--
      } else {
        const index = this.cart.indexOf(existingProduct)
        this.cart.splice(index, 1)
      }
    }
  }
})