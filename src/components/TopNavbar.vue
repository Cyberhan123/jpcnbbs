<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="8"><img src="../assets/LOGO.png" alt="" class="liuqiong_shop_img_logo"></el-col>
            <el-col :span="16" style="padding-left: 40px" >
                <div class="author-on" :hidden="true">
                    <el-button plain style="margin-top: 10px" @click="jumpToLogin">登录</el-button>
                    <el-button type="primary" style="margin-top: 10px" @click="jumpToSign">注册</el-button>
                </div>
                <router-link class="author-off" :hidden="false" to="/authorization/login">
                        {{username}}
                </router-link>
            </el-col>
        </el-row>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
                 :router="true">
            <el-menu-item index="/home/seek" style="padding: 0 17px">资讯</el-menu-item>
            <el-menu-item index="/home/study" style="padding: 0 17px">留学</el-menu-item>
            <el-menu-item index="/home/communication" style="padding: 0 17px;">交流</el-menu-item>
            <el-menu-item index="/home/message" style="padding: 0 17px">消息</el-menu-item>
            <el-menu-item index="/home/userInfo" style="padding: 0 17px">用户</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "TopNavbar",
        data() {
            return {
                activeIndex: '/home/seek',
                username:'Allen',
                log:'登录'
            };
        },
        methods: {
            handleSelect(key, keyPath) {},
            jumpToSign(){
                this.$router.push('/authorization/signin')
            }
            ,
            jumpToLogin() {
                this.$router.push('/authorization/login')
            }
        }
    }
</script>

<style scoped>
    .liuqiong_shop_img_logo {
        height: 50px;
        display: inline-block;
        margin-top: 5px;
    }
    .author-off{
        margin-top: 20px;
        color: #21C5C7;;
        font-size: 14px;
    }

</style>
