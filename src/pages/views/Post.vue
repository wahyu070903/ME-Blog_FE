<template>
    <div v-if="post_fetch_status" class="flex flex-row py-5 justify-center">
        <div>
            <div class="mx-4 mb-4 md:mx-auto md:w-[650px] lg:w-[1000px]">
                <div class="flex flex-row items-center space-x-2 font-inter font-medium text-[3.72vw] md:text-[16px] text-base-blue ">
                    <a href="#" class="">HOME</a>
                    <span class="">·</span>
                    <a href="#" class="uppercase">{{ tag }}</a>
                </div>
                <div class="font-inter font-bold text-[7.44vw] md:text-[38px] leading-[1.2] mt-1.5">
                    {{ title }}
                </div>
                <div class="mt-5 flex flex-col items-start font-inter text-[3.25vw] md:text-[14px]">
                    <div class="font-semibold">
                        {{ rtime }}
                        <span>Minutes</span>
                    </div>
                    <div>
                        Published
                        <span>February 7, 2025 12.00 PM</span>
                    </div>
                </div>
            </div>
            <div class="w-screen h-[60vw] md:w-[650px] md:h-[390px] md:mx-auto lg:w-[1000px] lg:h-[600px]">
                <img :src="thumbnail_path + thumbnail" class="w-full h-full object-cover">
            </div>
            <!-- Keep ck-content class there -->
            <div class="flex mx-4 mt-6 mb-2 md:w-[650px] md:mx-auto lg:w-[1000px] lg:justify-start xl:justify-center">
                <div id="__content" v-html="content" class="ck-content prose xl:prose-lg text-[4.65vw] font-roboto tracking-wide leading-[1.4] md:text-[20px] md:w-full lg:w-[650px]"></div>
            </div>
            <div class="flex flex-col space-y-2 mb-12 md:w-[650px] md:mx-auto lg:w-[1000px] lg:items-start xl:items-center">
                <CardPeek v-if="nextPost"
                    :id = "nextPost.id"
                    :title = "nextPost.title"
                    :description = "nextPost.description"
                    :tag = "nextPost.tag"
                    :thumbnail = "nextPost.thumbnail"
                />
                <CardPeek v-if="prevPost"
                    :id = "prevPost.id"
                    :title = "prevPost.title"
                    :description = "prevPost.description"
                    :tag = "prevPost.tag"
                    :thumbnail = "prevPost.thumbnail"
                />
            </div>
        </div>
        <div class="__aside hidden xl:block w-[18vw]">

        </div>
    </div>
</template>

<style scoped>
    ::v-deep(#__content a) {
        color: #0496FF !important;
    }
</style>

<script>
    import axios from 'axios';
    import Comments from '@/components/Comment.vue'
    import CardPeek from '@/components/CardPeek.vue'
    import 'ckeditor5/ckeditor5-content.css';
    import hljs from 'highlight.js';
    import 'highlight.js/styles/github.css'
    
    export default {
        data(){
            return {
                post_fetch_status: null,
                nextprev_fetch_status: null,
                content_id: null,
                title: '',
                description: '',
                rtime: 0,
                tag: '',
                content: '',
                thumbnail: '',
                post_date: '',
                month_format : {
                        1 : "Jan",
                        2 : "Feb",
                        3 : "Mar",
                        4 : "Apr",
                        5 : "May",
                        6 : "Jun",
                        7 : "Jul",
                        8 : "Aug",
                        9 : "Sep",
                        10 : "Okt",
                        11 : "Nov",
                        12 : "Des",
                },
                thumbnail_path : "http://127.0.0.1:8000/storage/thumbnail/",
                prevPost: null,
                nextPost: null,
            }
        },
        components: {
            Comments,
            CardPeek,
        },
        mounted(){
            this.content_id = this.$route.params.id
            this.fetchPost()
            this.fetchNextPrev()
        },
        watch: {
        '$route.params.id': {
            immediate: true,
                handler(newId) {
                    this.content_id = newId;
                    this.fetchPost();
                    this.fetchNextPrev();

                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth', // Smooth scrolling effect
                    });
                },
            },
        },
        methods: {
            fetchPost(){
                const endpoint = 'http://127.0.0.1:8000/api/getbyid/'
                axios.get(endpoint + this.content_id)
                    .then(response =>{
                        response = response.data.data[0]
                        this.title = response.title
                        this.description = response.description
                        this.post_date = response.created_at
                        this.rtime = response.rtime
                        this.tag = response.tag
                        this.content = response.content
                        this.thumbnail = response.thumbnail

                        this.post_fetch_status = true

                        this.$nextTick(() =>{
                            document.querySelectorAll("pre code").forEach((block) => {
                                hljs.highlightElement(block)
                            })
                        })
                    })
                    .catch(error =>{
                        console.log(error)
                        this.post_fetch_status = false
                    })
            },
            fetchNextPrev(){
                const endpoint = "http://127.0.0.1:8000/api/getnextprev/"
                axios.get(endpoint + this.content_id)
                    .then(response => {
                        response = response.data.data
                        this.prevPost = response.prev
                        this.nextPost = response.next

                        this.nextprev_fetch_status = true
                    })
                    .catch(error => {
                        console.log(error)
                        this.nextprev_fetch_status = false
                    })
            },
        },
        computed: {
            formattedDate(){
                let [year_now, month_now, day_now] = this.post_date.split("-")
                day_now = month_now.split('T')[0]
                month_now = parseInt(month_now)
                return `${this.month_format[month_now]} ${day_now}, ${year_now}`
            }
        },
    }
</script>
