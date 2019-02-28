<template>
    <div>
        <div v-for="(image, index) in images" :key="index" style="margin-bottom: 15px">
            <van-card
                    desc="在在在"
                    title="茶秋"
                    :thumb="image"
                    @click="jumpSendMessage"
            >
                <div slot="footer" style="margin-top: -45px;margin-bottom: 30px;">
                    下午2点
                </div>
            </van-card>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Message",
        data() {
            return {
                images: [
                    'https://src.hselfweb.cn/GoCyebrhan/img/a.jpg',
                    'https://src.hselfweb.cn/GoCyebrhan/img/a2.jpg',
                    'https://src.hselfweb.cn/GoCyebrhan/img/a.jpg'
                ]
            };
        },
        methods:{
            jumpSendMessage(){
                this.$router.push("/sendmessage")
            }
        }
    }
</script>

<style>
    .van-card__img {
        margin-top: 10px;
        margin-left: -20px;
        width: 60px;
        height: 60px;
        border-radius: 100%;
    }

    .van-card {
        position: relative;
        color: #323233;
        font-size: 12px;
        padding: 5px 15px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
        background-color: #ffff;
        border-radius: 15px;
    }

    .van-card__title {
        text-align: left;
        line-height: 50px;
        max-height: 32px;
        font-weight: 700;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .van-card__desc {
        text-align: left;
        color: #7d7e80;
        max-height: 20px;
    }

</style>
