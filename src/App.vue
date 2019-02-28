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
            'topNavbar': TopNavbar
        },
        created(){
            try {
                setTimeout(function() {
                    document.body.removeChild(document.getElementsByClassName('loader')[0]);
                    document.getElementById('app').style.display = 'block';
                }, 1000)
            } catch (e) {
                console.error("warning network is error or"+e);
            }
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
