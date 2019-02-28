<template>
    <div id="home">
        <el-container>
            <el-header style="height: auto">
                <top-navbar/>
            </el-header>
            <el-main>
                    <router-view/>
            </el-main>
        </el-container>
    </div>

</template>

<script>
    import TopNavbar from './../components/TopNavbar'
    export default {
        name: "Home",
        components: {
            'topNavbar': TopNavbar
        }
    }
</script>

<style scoped>

</style>
