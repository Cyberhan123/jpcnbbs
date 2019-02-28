<template>
    <div @click="jumpToArticle">
        <el-card shadow="always" style="margin-bottom: 10px" >
            <el-tag class="el-card-tag" color="red">置顶</el-tag>
            <h3 class="el-card-title">胡萝卜不辣</h3>
            <div class="el-card-main">胡萝卜不辣胡萝卜不辣胡萝卜不辣胡萝卜
                不辣胡萝卜不辣胡萝卜不辣胡萝卜不辣胡萝卜不
                辣胡萝卜不辣胡萝卜不辣胡萝卜不辣胡萝卜不辣胡萝卜不辣胡萝卜不辣
                辣胡萝卜不辣胡萝卜不辣胡萝卜不辣胡萝卜不辣胡萝卜不辣胡萝卜不辣
                辣胡萝卜不辣胡萝卜不辣胡萝卜不辣胡萝卜不辣胡萝卜不辣胡萝卜不辣
            </div>
            <span class="el-card-uptime">2018-11-26 10:12:23</span>
        </el-card>
    </div>

</template>

<script>
    export default {
        name: "listItem",
        methods:{
            jumpToArticle(){
                this.$router.push('/article')
            }
        }
    }
</script>

<style type="scss">
    .el-card__body {
        padding: 10px !important;
    }

    .el-card-title {
        text-align: left;
        font-size: 0.8em;
    }

    .el-card-main {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: left;
        margin: 15px 10px;
        color: #999;
    }

    .el-card-uptime {
        text-align: left;
        font-size: 12px;
        color: #b1b1b1;
        margin-left: 15em;
    }
    .el-card-tag{
        float: left;
        margin-right: 10px;
        height: 23px;
        line-height: 23px;
        margin-top: 10px;
        color: white;
    }

</style>
