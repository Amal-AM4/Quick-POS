<template>
    <v-navigation-drawer
        v-model="drawer.isOpen"
        temporary
        location="left"
        width="260"
        class="aside-nav"
        :class="{ 'drawer-open': drawer.isOpen }"
    >
        <v-list nav>
            <v-list-item title="Dashboard" @click="navigate('/dashboard')" />
            <v-list-item title="Sales Terminal" @click="navigate('/')" />
            <v-list-item title="Add Product" @click="navigate('/product')" />
            <v-list-item title="Suppliers" @click="navigate('/suppliers')" />
            <v-list-item title="Customers" @click="navigate('/')" />
            <v-list-item title="Reports" @click="navigate('/')" />
            <v-list-item title="Purchase" @click="navigate('/')" />
        </v-list>
    </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useDrawerStore } from '../store/drawerStore';
import { useRouter } from 'vue-router'

const drawer = useDrawerStore()
const router = useRouter()

const navigate = (path: string) => {
    router.push(path)
    drawer.closeDrawer()
}

</script>

<style scoped>
.aside-nav {
    transition: transform 0.3s ease;
    z-index: 300; /* higher than app bar if needed */
}
</style>