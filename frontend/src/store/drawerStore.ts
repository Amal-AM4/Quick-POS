import { defineStore } from 'pinia'

export const useDrawerStore = defineStore('drawer', {
    state: () => ({
        isOpen: false,
    }),
    actions: {
        toggleDrawer() {
            this.isOpen = !this.isOpen
        },
        openDrawer() {
            this.isOpen = true
        },
        closeDrawer() {
            this.isOpen = false
        }
    }
})