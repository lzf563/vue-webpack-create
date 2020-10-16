<template>
    <div>
        <!-- 这个是第一个页面直接引入到下边的APP.VUE页面中。试试看哈。 -->
        <div class="topcontent">

        </div>
        <div>
            <el-row class="box" :span="24">
                <el-col  :span="4">
                   
                </el-col>

                <el-col  :span="20">

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
            height: 20px;
        }
    }
    
    
    
</style>