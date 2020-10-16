<template>
    <div>
        <!-- 这个是第一个页面直接引入到下边的APP.VUE页面中。试试看哈。 -->
        <div class="topcontent">

        </div>
        <div>
            <el-row class="box" :span="24">
                <el-col  :span="4">
                   <el-menu 
                        @open="handleOpen"
                        @close="handleClose"
                   >    
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>导航一</span>
                            </template>
                            <el-menu-item-group>
                                <template slot="title">分组一</template>
                                <el-menu-item index="1-1" @click="to">选项1</el-menu-item>
                                <el-menu-item index="1-2">选项2</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                                <el-menu-item index="1-3">选项3</el-menu-item>
                            </el-menu-item-group>
                            <el-submenu index="1-4">
                                <template slot="title">选项4</template>
                                <el-menu-item index="1-4-1">选项1</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                   </el-menu>
                </el-col>

                <el-col  :span="20">
                    <router-view/>
                </el-col>
            </el-row>
        </div>



    </div>
</template>

<script>
export default {
    data(){
        return{
            text:[],
        }
    },
    created(){
        
    },
    methods:{
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },

        to(){
            this.$router.push("/list/one");
        }
    },

}
</script>

<style lang="scss" scoped>
    .topcontent{
        width: 100%;
        height: 60px;
        background-color: chartreuse;
    }
    .box{
        width: 100%;
        background-color: coral;
        .el-col{
            // height: 20px;
        }
    }
    
    
    
</style>