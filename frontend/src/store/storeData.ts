import { defineStore } from 'pinia'
import { GetStoreData } from '../../wailsjs/go/main/App'

interface StoreDetail {
  ID: number
  StoreName: string
  OwnerName: string
  AddressLine: string
  Place: string
  State?: string
  Pincode: string
  Phone: string
  Email?: string
  Gstin: string
  UpiID?: string
  CreatedAt: any
  UpdatedAt: any
}

export const useStoreData = defineStore('store', {
  state: (): { storeDetail: StoreDetail | null } => ({
    storeDetail: null
  }),

  actions: {
    async fetchStoreDetails() {
      try {
        const data: StoreDetail = await GetStoreData()
        // console.log("✅ Store Data from Go:", data)
        this.storeDetail = data
      } catch (error) {
        console.error("❌ Error fetching store details:", error)
      }
    }
  }
})
