<template>
<div>
    <div v-for="i in 10">
        <list-item :key="i"/>
    </div>
</div>
</template>

<script>
    import listItem from '../components/listItem'
    export default {
        name: "seek",
        components:{
           'listItem' :listItem
        }
    }
</script>

<style scoped>

</style>
