import { createRouter, createWebHistory } from 'vue-router';

import AppMain from './components/AppMain.vue';
import AppHome from './components/AppHome.vue';
import AppNotFound from './components/AppNotFound.vue';

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
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: AppNotFound
        }
    ]
});

export { router }