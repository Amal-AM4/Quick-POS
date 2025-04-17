<template>
    <div class="container">
        <v-container>
            <v-row dense>
                <v-col cols="12" sm="4" v-for="button, index in buttons" :key="index">
                    <RouterLink :to="button.route">
                        <v-btn
                            block
                            :color="button.color"
                            class="pa-10 text-uppercase text-center"
                            height="120"
                        >
                            <div class="d-flex flex-column align-center">
                                <v-icon size="48">{{ button.icon }}</v-icon>
                                <span class="text-h6 mt-2 font-weight-bold">{{ button.label }}</span>
                            </div>
                        </v-btn>
                    </RouterLink>
                </v-col>
            </v-row>

            <!-- Monthly Report section -->
            <v-container class="mt-2">
                <v-row>
                    <!-- graph left -->
                    <v-col cols="12" md="7">
                        <v-card height="300" class="pa-4">
                            <v-card-title>Sales Graph</v-card-title>
                            <v-card-text class="d-flex align-center justify-center text-medium-emphasis">
                                <!-- replace this with actual chart -->
                                <LineChart />
                            </v-card-text>
                        </v-card>
                    </v-col>

                    <!-- stats Right -->
                    <v-col cols="12" md="5">
                        <v-row dense>
                            <v-col cols="6">
                                <v-card class="pa-4">
                                    <v-row no-gutters align="center">
                                        <v-col cols="3">
                                            <v-icon size="32" color="green">mdi-currency-inr</v-icon>
                                        </v-col>
                                        <v-col>
                                            <div class="text-subtitle-1 font-weight-bold">Rs. 52,000</div>
                                            <div class="text-caption">Total Price</div>
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </v-col>

                            <v-col cols="6">
                                <v-card class="pa-4">
                                    <v-row no-gutters align="center">
                                        <v-col cols="3">
                                            <v-icon size="32" color="blue">mdi-cart-check</v-icon>
                                        </v-col>
                                        <v-col>
                                            <div class="text-subtitle-1 font-weight-bold">480</div>
                                            <div class="text-caption">Total Sales</div>
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </v-col>

                            <!-- row 2: full width card -->
                            <v-col cols="12" class="mt-2">
                                <v-card class="pa-4">
                                    <v-row no-gutters align="center">
                                        <v-col cols="2">
                                            <v-icon size="32" color="red">mdi-cash-minus</v-icon>
                                        </v-col>
                                        <v-col>
                                            <div class="text-subtitle-1 font-weight-bold">Rs. 28,500</div>
                                            <div class="text-caption">Total Expense</div>
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-col>

                </v-row>
            </v-container>

        </v-container>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import LineChart from '../components/LineChart.vue';


const buttons = [
    { label: 'New Bill', icon: 'mdi-file-document', color: 'blue-darken-2', route: '/bill' },
    { label: 'Add Product', icon: 'mdi-plus-box', color: 'green-darken-2', route: '/product' },
    { label: 'Suppliers', icon: 'mdi-truck', color: 'indigo-darken-2', route: '/suppliers' },
    { label: 'Customers', icon: 'mdi-account-group', color: 'deep-orange-darken-2', route: '/customers' },
    { label: 'Reports', icon: 'mdi-file-chart', color: 'purple-darken-2', route: '/reports' },
    { label: 'Purchase', icon: 'mdi-cart', color: 'teal-darken-2', route: '/purchase' },
]
</script>

<style scoped lang="scss">
.container {
  padding: 24px;
}

a {
  text-decoration: none;
}
</style>