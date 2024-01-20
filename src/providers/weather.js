const API_KEY = import.meta.env.VITE_API_KEY
import { ref } from 'vue'

export default class WeatherProvider{
    constructor(){
        this.city = ref([])
    }

    async getCity(city){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
        const json = await response.json()
        this.city.value = json
    }
}