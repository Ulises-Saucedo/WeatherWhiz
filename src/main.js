import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { OhVueIcon, addIcons } from "oh-vue-icons"
import { WiCloudyWindy, WiHumidity, WiThermometer, WiShowers } from "oh-vue-icons/icons"
addIcons(WiCloudyWindy, WiHumidity, WiThermometer, WiShowers)

createApp(App).component("v-icon", OhVueIcon).mount('#app')