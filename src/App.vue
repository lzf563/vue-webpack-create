<template>
    <div id="app">
        {{msg}}
        <!-- <button @click="clickto">点击一下</button> -->
        <router-view/>
    </div>
</template>

<script>
export default {
    name:'app',
    data(){
        return {
            msg:'hello 你好呀'
        }
    },
    methods:{
       
    }
}
</script>

<style>

</style>