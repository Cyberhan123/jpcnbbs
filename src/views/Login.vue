<template>
    <el-form status-icon label-width="100px" >
        <el-form-item prop="email"> <el-input autofocus placeholder="邮箱/手机号"></el-input>
        </el-form-item>
        <el-form-item prop="pass">
            <el-input type="password"  autocomplete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" >提交</el-button>
            <el-button>重置</el-button>
        </el-form-item>
    </el-form>
</template>

<script>

    export default {
        name: "Login",
        data() {
            return {

            };
        },
        methods: {
        }
    }
</script>

<style>
    .el-form-item__content{
        margin-left: 0 !important
    }
</style>
