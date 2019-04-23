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
        <div v-for="(item,index) in artArr">
            <list-item :key="index" :article="item" :ind="index"/>
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
                formLabelWidth: '120px',
                artArr:[],
            };
        },
        methods: {
            uploadArticle() {
                this.$router.push("/ar")
            }
        },
        created(){
            fetch('http://localhost:8080/api/profile/articles', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Expose-Headers': 'Authorization',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJwaG9uZSI6IjExMSIsInNjb3BlIjoidXNlciIsIklzc3VlZCI6eyJlcG9jaFNlY29uZCI6MTU1NDI1MjM3NSwibmFubyI6MH0sIm5hbWUiOiJkc2Fkc2RhIiwiRXhwaXJhdGlvbiI6eyJlcG9jaFNlY29uZCI6MTU1NDI1NTk3NSwibmFubyI6MH0sImVtYWlsIjoiZGFzZGFzZHNhZHNhZHMifQ.qxPehR9_nn5EB-2fT-UbaH4ae6vSbMd7hQhTkut9uUY'
                },
                //  body: JSON.stringify(content)
            }).then(response => response.json())
                .then(data => {
                    let temp = data.alps.descriptor;
                    this.artArr =temp.splice(3,(temp.length-2));
                });

        },
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
