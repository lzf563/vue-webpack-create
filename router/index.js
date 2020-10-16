import Vue from "vue";
import VueRouter from "vue-router";

import Index from "../page/index.vue";


Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            path: '/',
            name: 'Index',
            component: Index
        },
    ]
})