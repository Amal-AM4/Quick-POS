<template>
    <Line :data="chartData" :options="chartOptions" />
</template>

<script setup lang="ts">
import { Line } from 'vue-chartjs'
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement)

const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            label: 'Sales',
            data: [12000, 15000, 13000, 18000, 20000, 17000, 21000, 19000, 22000, 25000, 23000, 24000],
            borderColor: '#3f51b5',
            backgroundColor: 'rgba(63, 81, 181, 0.2)',
            tension: 0.4,
            fill: true,
        },
    ],
}

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false
}

</script>

<style>

</style>