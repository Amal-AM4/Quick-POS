<template>
    <div>
      <v-app-bar :elevation="2" color="primary" dark>
        <v-row align="center" class="ml-3" no-gutters>
            <v-btn icon @click="drawer.toggleDrawer">
              <v-icon>mdi-menu</v-icon>
            </v-btn>
            <v-avatar color="deep-purple accent-4" size="46">
                <span class="white--text font-weight-bold">
                  {{ storeDetail?.StoreName?.charAt(0) || "F" }}
                </span>
            </v-avatar>
            <!-- Column layout for Store Name and UPI ID -->
            <div class="ml-3 d-flex flex-column">
              <span class="text-h6 font-weight-bold white--text">
                {{ storeDetail?.StoreName || "store name" }}
              </span>
              <span class="text-caption white--text">{{ 'UPI: ' + storeDetail?.UpiID || "store name" }}</span>
            </div>
        </v-row>

        <v-spacer />

        <div class="d-flex align-center" style="gap: 12px; margin-right: 16px;">
        <!-- Settings Menu -->
            <v-menu offset-y v-model="settingsMenuOpen">
                <template #activator="{ props }">
                    <v-btn icon v-bind="props">
                        <v-icon :class="{ rotate: settingsMenuOpen }">mdi-cog</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item @click="goToProfile">
                        <v-list-item-title>Profile</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="goToSettings">
                        <v-list-item-title>Settings</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="changeAdministrator">
                        <v-list-item-title>Administrator</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <!-- Sign Out Button -->
            <v-btn icon @click="signOut">
                <v-icon>mdi-logout</v-icon>
            </v-btn>

            <!-- Date & Time -->
            <div class="d-flex flex-column text-right">
                <span class="text-subtitle-2 font-weight-bold">{{ currentDate }}</span>
                <span class="text-caption">{{ currentTime }}</span>
            </div>
        </div>
      </v-app-bar>

      <AsideNav />
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router'
import AsideNav from './AsideNav.vue';
import { useDrawerStore } from '../store/drawerStore';
import { useAuthStore } from '../store/auth'
import { useStoreData } from '../store/storeData'

const router = useRouter()
const drawer = useDrawerStore()
const auth = useAuthStore()
const store = useStoreData()

const settingsMenuOpen = ref(false)
const currentTime = ref<string>('')
const currentDate = ref<string>('')

const storeDetail = ref<any>(null); // 🏪 Holds your store data

const updateTime = (): void => {
    const now: Date = new Date()
    currentDate.value = now.toLocaleDateString()
    currentTime.value = now.toLocaleTimeString()
}

// Navigation to settings page (replace with your routing logic)
const goToSettings = (): void => {
  console.log('Navigating to settings...')
  // e.g., router.push('/settings')
}

// Sign-out handler (replace with your auth logic)
const signOut = async (): Promise<void> => {
  console.log('Signing out...')
  try {
    await auth.logout()
    console.log(auth.loggedIn)
    router.push('/login'); // 🚀 Redirect to login page
  } catch (error) {
    console.error(error);
  }
}

const goToProfile = () => {
  router.push('/UpdateProfile')
}

const changeAdministrator = () => {
  console.log('change the default username and password...')
  // Your theme logic here
}


onMounted(async () => {
    updateTime()
    setInterval(updateTime, 1000) // update every second

    await store.fetchStoreDetails()
    storeDetail.value = store.storeDetail
    // console.log("✅ After fetch:", storeDetail.value)
})

</script>

<style scoped lang="scss">
.v-app-bar {
  padding-left: 16px;
  padding-right: 16px;
}

.rotate {
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
