import { createRouter, createWebHistory } from 'vue-router';

import FormTemplate from "../formBuilder/FormTemplate.vue"
// import { appAuthRoutes } from '../formBuilder';

import {appControllerRoutes} from '../main/controller';
import {appAdminRoutes} from '../main/admin';
import {appDataSubjectRoutes} from '../main/data-subject';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '', redirect: '/admin', component: FormTemplate },
        ...appControllerRoutes, ...appAdminRoutes,...appDataSubjectRoutes


    ]
});

export default router