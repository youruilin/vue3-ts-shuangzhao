import { defineStore } from 'pinia'

export const contractStore = defineStore({
  id: 'contract',
  state: () => {
    return {
      type: 2
    }
  },
  actions: {
    setType(type) {
      this.type = type
    }
  }
})
