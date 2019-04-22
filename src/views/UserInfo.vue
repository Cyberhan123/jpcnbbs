<template>
    <div id="container">
        <van-cell-group>
            <van-field v-model="username" clearable
                       style="padding-top: 25px"
                       label="昵称"
                       placeholder="请输入用户名"></van-field>
            <van-field v-model="sex" clearable
                       @click="showSex"
                       readonly
                       style="padding-top: 25px"
                       label="性别"
                       placeholder="请输入用户名"></van-field>
            <van-picker v-show="isShowSex" :columns="columns" @confirm="onConfirm"
                        show-toolbar
            ></van-picker>
            <van-field
                    v-model="signature"
                    clearable
                    label="签名"
                    placeholder="个性签名"></van-field>
            <van-field
                    style="padding-top: 25px"
                    v-model="email"
                    clearable
                    label="邮箱"
                    placeholder="请输入邮箱"></van-field>
            <!--                    @click-right-icon="$toast('question')"-->
            <van-field
                    v-model="phone"
                    label="手机"
                    clearable
                    placeholder="请输入手机号"
                    error-message=""></van-field>
            <van-field
                    v-model="job"
                    style="padding-top: 25px"
                    label="职业"
                    clearable
                    placeholder="填写职业，发现同时"
                    error-message=""></van-field>
            <van-field
                    v-model="collage"
                    label="学校"
                    clearable
                    placeholder="填写学校，发现校友"
                    error-message=""></van-field>
            <van-field
                    v-model="address"
                    label="地址"
                    clearable
                    placeholder="输入当前地址"
                    error-message=""></van-field>
        </van-cell-group>



    </div>
</template>

<script>
    export default {
        name: "UserInfo",
        data() {
            var I=this.$store.state.BASIC_URL+"/users";
            return {
                columns: ['男', '女','不显示性别'],
                signature:'好好学习，天天向上',
                sex:'男',
                job:'软件工程师',
                username: 'Allen',
                password: '',
                email: '1485562214@qq.com',
                phone: '13333333333',
                collage: '哈尔滨理工大学',
                address:'黑龙江省哈尔滨市哈尔滨理三大动力路',
                isShowSex:false

            }
        },
        created(){

        },
        methods:{
            onConfirm(value){
                this.sex = value;
                this.isShowSex = false;

            },
            showSex(){
                this.isShowSex = true;
            }
        }
    }
</script>

<style scoped>

</style>
