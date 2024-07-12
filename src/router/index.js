import {createRouter, createWebHistory} from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import ExpertView from "@/views/ExpertView.vue";
import GuideView from "@/views/GuideView.vue";
import RegistrationView from "@/views/RegistrationView.vue";
import ScoreView from "@/views/expert/ScoreView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_PATH),
    routes: [
        {
            path: '/',
            name: 'home1',
            component: HomeView
        },
        {
            path: '/Home',
            name: 'home2',
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
        },
        {
            path:'/Expert/Score',
            name:'Score',
            component:ScoreView
        }
    ]
})

export default router
