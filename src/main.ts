import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './config/routes'

const router = createRouter({
    routes,
    history: createWebHistory()
})

createApp(App).use(createPinia()).use(router).mount('#app')
