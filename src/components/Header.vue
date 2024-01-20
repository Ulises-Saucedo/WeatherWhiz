<script setup>
    import { ref } from 'vue'

    const city = ref("")
    const emits = defineEmits(['searchCity'])

    const searchCity = () =>{
        emits('searchCity', city.value)
    }
</script>

<template>
    <header class="flex justify-between items-center h-full">
        <img 
            src="../assets/weatherwhiz-high-resolution-logo-transparent.png" 
            alt="logo"
            class="max-w-[75px] sm:max-w-[100px] md:max-w-[150px] max-h-full object-contain"
        >
        <input 
            type="text" 
            @keyup.enter.prevent="searchCity"
            class="p-1 outline-none rounded text-[#FAFAFA] bg-[#27272A]"
            placeholder="Search"
            v-model="city"
        >
    </header>
</template>