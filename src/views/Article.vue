<template>
<div>
    <van-nav-bar
            title="胡萝卜不辣"
            left-text="返回"
            left-arrow
            @click-left="returnBtn"></van-nav-bar>
    <el-card shadow="" style="margin-bottom: 10px" >
        <div class="el-card-actile">
        <div class="article-title">中日友好</div>
        <div class="article-content">
            文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容
            文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容
            文章内容文章内容文章内容文章内容文章内容文章内容
            文章内容文章内容文章内容文章内容文章内容
            文章内容文章内容文章内容文章内容文章内容文章内容
            文章内容文章内容文章内容文章内容文章内容文章内容文章内容
            文章内容文章内容文章内容文章内容文章内容
            文章内容文章内容文章内容文章内容
            文章内容文章内容文章内容文章内容
            文章内容文章内容文章内容文章内容文章内容文章内容文章内容
            文章内容文章内容文章内容文章内容文章内容
            文章内容文章内容文章内容文章内容文章内容
            文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容
            文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容
            文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容
            文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容
            文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容
            文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容
            文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容
            文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容
            文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容
            文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容
            文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容
            文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容
            文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容
            文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容
            文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容
            文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容





        </div>
        </div>
        <el-input
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 4}"
                placeholder="发表评论"
                v-model="textarea"
        >
        </el-input>
        <el-button type="primary" size="mini" round class="published">发表</el-button>
        <div class="clearBoth"></div>
        <div class="comments" >
            <div>
                <img src="./../assets/headImage.png" class="headImage" alt="">
                <div class="commentsName">dwqd</div>
            </div>
            <div class="clearBoth"></div>
            <div class="commentsContext">dwqdqdqwdqdqwddqw</div>
            <div class="clearBoth"></div>
            <!--<el-button round style="float: left;margin-left: 2rem" size="mini">回复</el-button>-->
            <span class="timeStamp">2018-11-26 10:12:23</span>
            <div class="clearBoth"></div>

        </div>
    </el-card>


</div>
</template>

<script>
    export default {
        data() {
            return {
                textarea: '',
                arr:[1,2,3,4,5,6,7,8,9,10]
            }
        },
        name: "Article",
        methods:{
            returnBtn(){
                this.$router.history.go(-1);
            }
        }
    }
</script>

<style scoped>
.timeStamp{
    float: right;
    color: darkgrey;
    font-size: 0.2rem;

}
.commentsContext{
    float: left;
    margin-left: 2rem;
}
.headImage{
    float: left;
    width: 1.5rem;
    height: 1.5rem;
    overflow: hidden;
    border-radius:50%;
}
.clearBoth{
    clear: both;
}
.commentsName{
    float: left;
    display: inline-block;
    margin-left: 0.5rem;
    height: 1.5rem;
    line-height: 1.5rem;
    color: deepskyblue;
}
.published{
    float: right;
    margin-top: 0.5rem;
}
.comments{
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 0.05rem gainsboro solid;
}
.article-title{
    font-size: 1.5rem;
}
</style>
