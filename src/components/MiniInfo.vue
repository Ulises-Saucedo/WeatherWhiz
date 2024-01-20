<script setup>
    const props = defineProps({
        wind: {
            type: Object
        },
        main: {
            type: Object
        }
    })
</script>

<template>
    <div class="flex">
        <div class="bg-[#53482B] p-2 rounded flex items-center">
            <v-icon name="wi-cloudy-windy" fill="#C0A333"></v-icon>
        </div>
        <div class="flex flex-col items-start">
            <h2 class="text-[#A9A99D] pl-2 text-sm">Wind</h2>
            <p class="text-[#FAFAFA] pl-2 text-sm">{{ props.wind.speed }} km/h</p>
        </div>
    </div>
    <div class="flex">
        <div class="bg-[#2E3A53] p-2 rounded flex items-center">
            <v-icon name="wi-humidity" fill="#4686FF"></v-icon>
        </div>
        <div class="flex flex-col items-start">
            <h2 class="text-[#A9A99D] pl-2 text-sm">Humidity</h2>
            <p class="text-[#FAFAFA] pl-2 text-sm">{{ props.main.humidity }}%</p>
        </div>
    </div>
    <div class="flex">
        <div class="bg-[#325948] p-2 rounded flex items-center">
            <v-icon name="wi-thermometer" fill="#8CC563"></v-icon>
        </div>
        <div class="flex flex-col items-start">
            <h2 class="text-[#A9A99D] pl-2 text-sm">Pressure</h2>
            <p class="text-[#FAFAFA] pl-2 text-sm">{{ props.main.pressure }}</p>
        </div>
    </div>
</template>