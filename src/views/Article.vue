<template>
<div>
    <van-nav-bar
            title="胡萝卜不辣"
            left-text="返回"
            left-arrow
            @click-left="returnBtn"></van-nav-bar>
    <el-card shadow="always" style="margin-bottom: 10px" >
        <h3 class="el-card-title">胡萝卜不辣</h3>
        <div class="el-card-actile">
            胡萝卜不辣胡萝卜不辣胡萝卜不辣胡萝卜
            胡萝卜不辣胡萝卜不辣胡萝卜不辣胡萝卜
            胡萝卜不辣胡萝卜不辣胡萝卜不辣胡萝卜
            胡萝卜不辣胡萝卜不辣胡萝卜不辣胡萝卜
            胡萝卜不辣胡萝卜不辣胡萝卜不辣胡萝卜
        </div>
        <span class="el-card-uptime">2018-11-26 10:12:23</span>
    </el-card>
</div>
</template>

<script>
    export default {
        name: "Article",
        methods:{
            returnBtn(){
                this.$router.history.go(-1);
            }
        }
    }
</script>

<style scoped>

</style>
