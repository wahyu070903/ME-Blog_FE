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
        </div>
        <div class="__aside hidden xl:block w-[18vw]">

        </div>
        <!-- <div class="flex flex-row items-center justify-between border-b py-2.5 mb-3">
            <div class="flex flex-row items-center space-x-5">
                <button class="flex flex-row items-center">
                    <i class="bi bi-hand-thumbs-up text-sm"></i>
                    <p class="mx-1 text-xs">
                        <span>10</span>
                        Likes
                    </p>
                </button>
                <div class="flex flex-row items-center cursor-default">
                    <i class="bi bi-chat-left-dots text-sm"></i>
                    <p class="mx-1 text-xs">
                        Discussion (<span>10</span>)
                    </p>
                </div>
            </div>
            <div class="flex flex-row items-center space-x-3">
                <p class="text-xs">Share : </p>
                <a href="#">
                    <i class="bi bi-threads-fill text-sm"></i>
                </a>
                <a href="#">
                    <i class="bi bi-instagram text-sm"></i>
                </a>
                <a href="#">
                    <i class="bi bi-twitter-x text-sm"></i>
                </a>
            </div>
        </div> -->
        <!-- prev and next button -->
        <!-- <div v-if="nextprev_fetch_status" class="flex flex-row items-center justify-between mb-10">
            <RouterLink :to="'/post/' + prevPost.id" v-if="prevPost" class="flex flex-row items-center space-x-1.5">
                <i class="bi bi-arrow-left text-sm"></i>
                <div class="max-w-40">
                    <p class="text-xs line-clamp-2 w-full font-bold text-left">{{ prevPost.title }}</p>
                </div>
            </RouterLink>
            <RouterLink :to="'/post/' + nextPost.id" v-if="nextPost" class="flex flex-row items-center space-x-1.5">
                <div class="max-w-40">
                    <p class="text-xs line-clamp-2 w-full font-bold text-right">{{ nextPost.title }}</p>
                </div>
                <i class="bi bi-arrow-right text-sm"></i>
            </RouterLink>
        </div> -->
        <!-- <form>
            <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                    <label for="comment" class="sr-only">Your comment</label>
                    <textarea id="comment" rows="4" class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..." required ></textarea>
                </div>
                <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                    <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                        Post comment
                    </button>
                    <div class="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
                        <button type="button" class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 20">
                                    <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"/>
                                </svg>
                            <span class="sr-only">Attach file</span>
                        </button>
                        <button type="button" class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                    <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
                                </svg>
                            <span class="sr-only">Set location</span>
                        </button>
                        <button type="button" class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                                </svg>
                            <span class="sr-only">Upload image</span>
                        </button>
                    </div>
                </div>
            </div>
        </form> -->
        <!-- <Comments />
        <Comments />
        <Comments /> -->
    </div>
</template>

<style scoped>
    ::v-deep(#__content a) {
        color: #0496FF !important;
    }
</style>

<script>
    import Comments from '@/components/Comment.vue'
    import axios from 'axios';
    import 'ckeditor5/ckeditor5-content.css';
    
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
        }
    }
</script>
