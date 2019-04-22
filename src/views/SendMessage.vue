<template>
    <div>
        <van-nav-bar
                title="发送消息"
                left-text="返回"
                left-arrow
                @click-left="returnBtn"></van-nav-bar>
        <ul class="content">
        </ul>
        <div class="footer">
            <el-row type="flex">
                <el-col :span="16">
                    <el-input placeholder="请输入内容"></el-input>
                </el-col>
                <el-col :span="2"></el-col>
                <el-col :span="4">
                    <el-button type="primary" round>发送</el-button>
                </el-col>
                <el-col :span="2"></el-col>
            </el-row>

        </div>

    </div>
</template>

<script>
    export default {
        name: "SendMessage",
        methods: {
            returnBtn() {
                this.$router.push('/home/message');
            },
        }
    }
</script>

<style scoped>
    .footer {
        background: #fff;
        width: 100%;
        position: fixed;
        bottom: 0;
        padding: 20px;
    }
.message{
    display: flex;
    width: 70%;
    margin-bottom: 20px;
    margin-left: 15px;
    padding: 14px 26px 14px 13px;
    border-radius: 8px;
    box-sizing: border-box;
    border: 1px solid #ebeef5;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    transition: opacity .3s, transform .3s, left .3s, right .3s, top 0.4s, bottom .3s;
    overflow: hidden;
}
    .message-my{
        display: flex;
        width: 70%;
        margin-bottom: 20px;
        margin-left: 25%;
        padding: 14px 26px 14px 13px;
        border-radius: 8px;
        box-sizing: border-box;
        border: 1px solid #ebeef5;
        background-color: #fff;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        transition: opacity .3s, transform .3s, left .3s, right .3s, top 0.4s, bottom .3s;
        overflow: hidden;
    }

</style>
