<script setup>
    import Weather from './components/Weather.vue'
</script>

<template>
    <Suspense>
        <Weather />
        <template #fallback>
            <p>Cargando...</p>
        </template>
    </Suspense>
</template>