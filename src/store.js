import { reactive } from 'vue';

export const store = reactive({
    navbar:[
        {
            name: 'home',
            label: 'Home'
        },
        {
            name: 'portfolio',
            label: 'Portfolio'
        }
    ]
})