<template>
    <div class="flex flex-row justify-center mx-[4vw] py-[8vw] md:py-8 md:mx-0 font-inter">
        <div class="__homepaginate md:w-[650px] lg:w-[1000px]">
            <div class="py-4 flex flex-col items-start justify-start space-y-2 md:flex-row md:items-start md:justify-between md:space-y-0 border-b border-gray-600/60">
                <div class="text-[7.44vw] md:text-[38px] font-semibold">
                    Archives
                </div>
                <Paginator v-if="count_success"
                    :total_item="post_count"
                    :active_page="paginate_page"
                />
            </div>
            <div class="flex flex-col py-10 space-y-4">
                <template v-for="i in 20">
                    <SmallFeed 
                        :post_id="i"
                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis, lacus at fringilla rutrum, lacus sapien scelerisque tellus, sit amet dapibus nibh ex rutrum odio. "
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis, lacus at fringilla rutrum, lacus sapien scelerisque tellus, sit amet dapibus nibh ex rutrum odio. "
                        post_date="2025-10-2" 
                        :rtime=5
                        thumbnail="drone.jpg" 
                        tag="TECH"
                    />        
                </template>
            </div>
            <Paginator v-if="count_success"
                :total_item="post_count"
                :active_page="paginate_page"
            />
        </div>
        <div class="__aside hidden xl:block w-1/5 h-full">
            
        </div>
    </div>
    {{ paginate_page }}
</template>

<script>
    import axios from 'axios';
    import SmallFeed from '@/components/FeedBoardSmall.vue';
    import Paginator from '@/components/Paginator.vue';

    export default {
        components: {
            SmallFeed,
            Paginator
        },
        data(){
            return {
                posts: null,
                post_count: null,
                count_success: null,
                fetch_success: null,
                paginate_page: null,
            }
        },
        methods: {
            async fetchPaginate(){
                const endpoint = 'http://127.0.0.1:8000/api/paginate/'
                axios.get(endpoint + '0')
                .then(response =>{
                    response = response.data
                    posts = response.data
                    this.fetch_success = true
                })
                .catch(error =>{
                    this.fetch_success = false
                })
            },
            async countPost(){
                const endpoint = 'http://127.0.0.1:8000/api/count'
                axios.get(endpoint)
                .then(response =>{
                    this.post_count = response.data.data
                    this.count_success = true
                })
                .catch(error =>{
                    this.count_success = false
                })
            }
        },
        mounted(){
            this.countPost()
            this.fetchPaginate()
            this.paginate_page = Number(this.$route.params.num) 
        }
    }
</script>