import { defineStore } from 'pinia'
import type { Product } from '~/data/products'

export interface CartItem {
  id: number
  name: string
  price: number
  image: string
  quantity: number
  weight: string
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
    toastVisible: false,
    toastProduct: '' as string,
    drawerOpen: false,
  }),

  getters: {
    totalItems: (state): number =>
      state.items.reduce((sum, item) => sum + item.quantity, 0),
    totalPrice: (state): number =>
      state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
  },

  actions: {
    addItem(product: Product, quantity = 1) {
      const existing = this.items.find(i => i.id === product.id)
      if (existing) {
        existing.quantity += quantity
      } else {
        this.items.push({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity,
          weight: product.weight,
        })
      }
      this.showToast(product.name)
    },

    removeItem(id: number) {
      this.items = this.items.filter(i => i.id !== id)
    },

    updateQuantity(id: number, quantity: number) {
      const item = this.items.find(i => i.id === id)
      if (item) {
        if (quantity <= 0) this.removeItem(id)
        else item.quantity = quantity
      }
    },

    showToast(productName: string) {
      this.toastProduct = productName
      this.toastVisible = true
      setTimeout(() => { this.toastVisible = false }, 2500)
    },
  },
})
