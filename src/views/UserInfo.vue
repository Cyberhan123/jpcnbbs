<template>
    <div>
        dwdw
        {{aa}}
    </div>
</template>

<script>
    export default {
        name: "UserInfo",
        data() {
            var I=this.$store.state.BASIC_URL+"/users";
            return {
                aa:I,
                textarea: '',
                arr:[1,2,3,4,5,6,7,8,9,10],

            }
        },
    }
</script>

<style scoped>

</style>
