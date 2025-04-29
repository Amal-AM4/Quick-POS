<script lang="ts" setup>
import { RouterView, useRoute } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'

const route = useRoute()

</script>

<template>
  <v-app> <!-- Vuetify app wrapper -->
    <!-- Show HeaderComponent only when not on the login page -->
    <HeaderComponent v-if="route.name !== 'login'" /> <!-- Your header -->
    
    <v-main> <!-- Main content area for routed views -->
        <RouterView />
    </v-main>
  </v-app>
</template>
