import Vue from "vue";
import VueRouter from "vue-router";

// import Index from "../page/index.vue";
import One from "../page/modules/list/one.vue";


Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        // {
        //     path: '/',
        //     name: 'Index',
        //     component: Index
        // },
        {
            path:"/list/one",
            name:"One",
            component:One
        }
    ]
})