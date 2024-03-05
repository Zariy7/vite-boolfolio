import { createRouter, createWebHistory } from 'vue-router';

import AppMain from './components/AppMain.vue';
import AppHome from './components/AppHome.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: AppMain
        },
    ]
});

export { router }