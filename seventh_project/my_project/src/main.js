import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import NewFav from './components/NewFav'
import MainComp from './components/MainComp'

const router = createRouter({
  routes: [
    {
        path: '/',
        component: MainComp
    },
        {
            path: '/favor',
            component: NewFav
        }
    ],
    history: createWebHistory()
})

const app = createApp(App)
app.use(router)
app.mount('#app')