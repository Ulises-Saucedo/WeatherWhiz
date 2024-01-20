<script setup>
    import MiniInfo from './MiniInfo.vue'
    import Header from './Header.vue'
    import WeatherProvider from '../providers/weather.js'
    
    const fechaActual = new Date()
    const fecha = {
        año: fechaActual.getFullYear(),
        mes: fechaActual.getMonth() + 1,
        dia: fechaActual.getDate()
    }
    const weatherRef = new WeatherProvider()
    const weather = weatherRef.city

    const searchCity = async (value) =>{
        await weatherRef.getCity(value)
    }

    await weatherRef.getCity("Barcelona")
</script>
            
<template>
    <section class="w-full min-h-screen grid grid-cols-4 grid-rows-6 md:grid-rows-5 gap-6 p-5">
        <section class="col-start-1 col-end-5 bg-[#131315] rounded p-4">
            <Header @searchCity="searchCity"/>
        </section>
        <section class="row-start-2 row-end-4 col-start-1 col-end-5 md:col-end-4 bg-[#131315] rounded flex justify-between p-4">
            <h1 class="text-[#FAFAFA] font-bold">🌍 {{ weather.name }}</h1>
            <div class="flex h-full items-center">
                <img 
                    class="aspect-square max-w-[50px] max-h-[50px]"
                    :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`"
                >
                <div>
                    <h2 class="text-[#FAFAFA] text-xl">{{ weather.main.temp }} <span>Fº</span></h2>
                    <p class="text-[#FAFAFA]">{{ weather.weather[0].description }}</p>
                </div>
            </div>
            <div>
                <p class="text-[#FAFAFA]">🗓️ {{ fecha.dia }}/{{ fecha.mes }}/{{ fecha.año }}</p>
            </div>
        </section>
        <section class="row-start-4 row-end-6 col-start-3 col-end-5 md:row-start-2 md:row-end-4 md:col-start-4 md:col-end-5 bg-[#131315] rounded overflow-hidden">
            <iframe 
                :src="`https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2483.256867254237!2d${weather.coord.lon}!3d${weather.coord.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTHCsDMwJzMwLjYiTiAwwrAwNyczMi41Ilc!5e0!3m2!1ses-419!2sar!4v1705779452764!5m2!1ses-419!2sar`"
                class="w-full h-full"
            >
            </iframe>
        </section>
        <section class="row-end-6 row-start-4 col-start-1 col-end-3 md:row-end-6 md:col-end-2 bg-[#131315] rounded p-4 flex flex-col justify-between">
            <MiniInfo :wind="weather.wind" :main="weather.main" />
        </section>
        <section class="col-start-1 col-end-5 row-start-6 row-end-7 md:col-start-2 md:col-end-5 md:row-start-4 md:row-end-6 bg-[#131315] rounded p-4 flex justify-center items-end">
            <h2 class="font-bold text-xl text-[#FAFAFA]">✌️ Ulises Saucedo</h2>
        </section>
    </section>
</template>