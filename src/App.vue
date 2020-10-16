<template>
    <div id="app">
        <span class="toHome" @click="toHome">{{msg}}</span>
        <!-- <button @click="clickto">点击一下</button> -->
        <Index/>
    </div>
</template>

<script>
import Index from "../page/index.vue";
export default {
    name:'app',
    components:{
        Index
    },
    data(){
        return {
            msg:'hello 你好呀'
        }
    },
    methods:{
        toHome(){
            this.$router.push("/");
        }
    }
}
</script>

<style>
*{
    padding: 0px;
    margin: 0px;
    
}
.toHome{
    cursor: pointer;
}
</style>