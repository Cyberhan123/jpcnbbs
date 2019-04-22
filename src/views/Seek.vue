<template>
<div>
    <div v-for="(item,index) in artArr">
        <list-item :key="index" :article="item" :ind="index"/>
    </div>
</div>
</template>

<script>
    import listItem from '../components/listItem'
    export default {
        name: "seek",
        components:{
           listItem :listItem
        },
        data(){
            return{
                artArr:[]
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
                    this.artArr =temp.splice(1,(temp.length-2));
            });
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>
