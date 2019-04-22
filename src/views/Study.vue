<template>
<div>
    <van-swipe :autoplay="2000" style="margin-bottom: 15px">
        <!--图片懒加载-->
        <van-swipe-item v-for="(image, index) in images" :key="index">
            <img  v-lazy="image" alt="" src=""/>
        </van-swipe-item>
    </van-swipe>
<!--    <div v-for="i in 10">-->
<!--        <list-item :key="i"/>-->
<!--    </div>-->
</div>
</template>

<script>
    // import listItem from '../components/listItem'
    export default {
        name: "study",
        components:{
          // listItem:listItem,
        },
        data(){
            return{
                images: [
                    'https://src.hselfweb.cn/GoCyebrhan/img/a.jpg',
                    'https://src.hselfweb.cn/GoCyebrhan/img/a2.jpg',
                    'https://src.hselfweb.cn/GoCyebrhan/img/a.jpg'
                ]
            }
        }
    }
</script>

<style scoped>

</style>
