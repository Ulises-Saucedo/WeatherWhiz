<script setup>
    import WeatherProvider from '../providers/weather.js'

    const weatherRef = new WeatherProvider()
    const weather = weatherRef.city

    await weatherRef.getCity('London')
</script>

<template>
    <h2>{{ weather.name }}</h2>
</template>