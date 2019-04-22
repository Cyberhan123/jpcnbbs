<template>
    <div id="app">
        <transition name="el-zoom-in-center" style="margin-top: -20px">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import TopNavbar from './components/TopNavbar'

    export default {
        components: {
            topNavbar: TopNavbar
        },
        created(){
            try {
                setTimeout(function() {
                    document.body.removeChild(document.getElementsByClassName('loader')[0]);
                    document.getElementById('app').style.display = 'block';
                }, 1000)
            } catch (e) {}
            fetch('http://localhost:8080/api/profile', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Expose-Headers': 'Authorization',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJwaG9uZSI6IjExMSIsInNjb3BlIjoidXNlciIsIklzc3VlZCI6eyJlcG9jaFNlY29uZCI6MTU1NDI1MjM3NSwibmFubyI6MH0sIm5hbWUiOiJkc2Fkc2RhIiwiRXhwaXJhdGlvbiI6eyJlcG9jaFNlY29uZCI6MTU1NDI1NTk3NSwibmFubyI6MH0sImVtYWlsIjoiZGFzZGFzZHNhZHNhZHMifQ.qxPehR9_nn5EB-2fT-UbaH4ae6vSbMd7hQhTkut9uUY'
                },
                //  body: JSON.stringify(content)
            }).then(response => response.json())
                .then(data => {
                 console.log(data)
                });
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
