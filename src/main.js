import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import Aos from 'aos'
import router from '../src/routers'
import {faFortAwesome} from '@fortawesome/vue-fontawesome'


createApp(App).use(router).use(Aos).use(faFortAwesome).mount('#app')
