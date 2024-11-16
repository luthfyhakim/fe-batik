import { defineStore } from 'pinia'

export const usePurchaseStore = defineStore('purchase', {
  state: () => ({
    selectedSize: 'S',
    quantity: 1,
    shippingMethod: 'same-day',
    paymentMethod: 'bca',
    productData: null,
    totalPrice: 0,
    shippingCost: {
      'same-day': 70000,
      'regular': 12000,
      'cargo': 55000,
      'economy': 7500
    },
    transactionFee: 2000,
    discount: 5000,
    orderDate: null
  }),

  getters: {
    formattedTotalPrice: (state) => {
      if (!state.productData) return 0
      return (state.productData.harga * state.quantity).toLocaleString('id-ID')
    },

    finalTotalPrice: (state) => {
      if (!state.productData) return 0
      const subtotal = state.productData.harga * state.quantity
      const shipping = state.shippingCost[state.shippingMethod]
      return subtotal + shipping + state.transactionFee - state.discount
    },

    formattedShippingCost: (state) => {
      return state.shippingCost[state.shippingMethod].toLocaleString('id-ID')
    }
  },

  actions: {
    setSize(size) {
      this.selectedSize = size
    },

    setQuantity(value) {
      const qty = parseInt(value)
      if (isNaN(qty)) {
        this.quantity = 1
      } else {
        this.quantity = Math.min(Math.max(qty, 1), 99)
      }
    },

    incrementQuantity() {
      if (this.quantity < 99) {
        this.quantity++
      }
    },

    setOrderDate() {
      this.orderDate = new Date().toISOString().slice(0, 10)
    },

    decrementQuantity() {
      if (this.quantity > 1) {
        this.quantity--
      }
    },

    setShippingMethod(method) {
      this.shippingMethod = method
    },

    setPaymentMethod(method) {
      this.paymentMethod = method
    },

    setProductData(data) {
      this.productData = data
    }
  }
})