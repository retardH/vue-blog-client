import './style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {createRouter} from "vue-router";
import App from './App.vue'
import router from "@/router";
const app = createApp(App)
import VueAwesomePaginate from "vue-awesome-paginate";

// import the necessary css file
import "vue-awesome-paginate/dist/style.css";
app.use(createPinia())

app.use(router)
app.use(VueAwesomePaginate)

app.mount('#app')
