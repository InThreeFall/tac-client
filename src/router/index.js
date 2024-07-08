import {createRouter, createWebHistory} from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import ExpertView from "@/views/ExpertView.vue";
import GuideView from "@/views/GuideView.vue";
import RegistrationView from "@/views/RegistrationView.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/Expert',
            name: 'expert',
            component: ExpertView
        },
        {
            path: '/Guide',
            name: 'guide',
            component: GuideView
        },
        {
            path: '/Registration',
            name: 'registration',
            component: RegistrationView
        }
    ]
})

export default router
