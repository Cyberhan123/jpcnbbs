<template>
    <div id="communication">
        <el-dialog title="发帖" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item>
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input
                            type="textarea"
                            :rows="4"
                            placeholder="请输入内容">
                    </el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
        <div class="page-component-up" @click="dialogFormVisible=true"><i class="el-icon-edit"
                                                                          style="font-size: 20px;line-height: 2;color: white "></i>
        </div>
        <div>
            <list-item v-for="i in 10" :key="i"/>
        </div>
    </div>
</template>

<script>
    import listItem from '../components/listItem'

    export default {
        name: "Communication",
        components: {
            listItem
        },
        data() {
            return {
                dialogFormVisible: false,
                form: {
                    name: '',
                    data1: '',
                    delivery: false,
                },
                formLabelWidth: '120px'
            };
        },
        methods: {
            uploadArticle() {
                this.$router.push("/ar")
            }
        }
    }
</script>

<style>
    .page-component-up {
        background-color: #409EFF;
        position: fixed;
        right: 60px;
        bottom: 60px;
        width: 40px;
        height: 40px;
        border-radius: 20px;
        cursor: pointer;
        transition: .3s;
        box-shadow: 0 0 6px rgba(0, 0, 0, .12);
        z-index: 5;
    }
    .el-dialog {
        width: 80%;
    }
</style>
