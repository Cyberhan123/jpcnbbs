<template>
    <div id="aurhorization">
        <van-nav-bar
                :title="title"
                left-text="返回"
                left-arrow
                @click-left="returnBtn"></van-nav-bar>
        <el-container>
            <el-header>
               <img src="../assets/LOGO.png" alt="" class="liuqiong_shop_img_logo">
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "Authorization",
        data() {
            var getTitle = () => {
                let title;
                if (this.$router.history.current.fullPath=== '/authorization/signin') {
                    title="注册"
                }
                if(this.$router.history.current.fullPath=== '/authorization/login'){
                    title="登录"
                }
                return title;
            };
            return {
                title: getTitle()
            }
        },

        methods: {
            returnBtn() {
                this.$router.push("/")
            }
        }
    }
</script>

<style scoped>
    .liuqiong_shop_img_logo {
        height: 50px;
        display: inline-block;
        margin-top: 20px;
    }
</style>
