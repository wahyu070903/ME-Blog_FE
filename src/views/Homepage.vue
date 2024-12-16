<template>
    <div class="w-full relative h-full">
        <div class="relative w-full h-[78vw]">
            <!-- Title Skeleton -->
            <div v-if="loading" class="absolute top-5 left-5 animate-pulse">
                <div class="h-3.5 bg-gray-200 rounded-sm dark:bg-gray-700 w-16"></div>
            </div>
            <div v-else class="absolute top-5 left-5">
                <i class="bi bi-lightning text-base text-white inline"></i>
                <p class="text-sm text-white inline mx-[6px] font-medium">RECENT POST</p>
            </div>
            <!-- Read time Skeleton -->
            <div v-if="loading" class="absolute right-5 bottom-14 animate-pulse">
                <div class="h-3.5 bg-gray-200 rounded-sm dark:bg-gray-700 w-16"></div>
            </div>
            <div v-else class="absolute right-5 bottom-14 flex flex-row items-center">
                <i class="bi bi-clock-history text-white text-base"></i>
                <p class="text-sm text-white font-medium mx-[6px]">{{ latest.rtime }} MIN READ</p>
            </div>
            <!-- Image Skeleton -->
            <div v-if="loading" class="flex items-center justify-center h-full w-full animate-pulse mb-4 bg-gray-300 dark:bg-gray-700">
                <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                </svg>
            </div>
            <img v-else class="w-full h-full object-cover" :src=getImageUrl(latest.thumbnail)>
        </div>
        <!-- Content Skeleton -->
        <div v-if="loading" class="w-full ml-7 -mt-6">
            <div class="w-[68%]">
                <div class="h-4 bg-gray-200 rounded-md dark:bg-gray-700 w-48 mb-4"></div>
            </div>
            <div class="w-[90%]">
                <div class="h-3 bg-gray-200 rounded-sm dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                <div class="h-3 bg-gray-200 rounded-sm dark:bg-gray-700 mb-2.5"></div>
                <div class="h-3 bg-gray-200 rounded-sm dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                <div class="h-3 bg-gray-200 rounded-sm dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                <div class="h-3 bg-gray-200 rounded-sm dark:bg-gray-700 max-w-[360px]"></div>
            </div>
        </div>
        <div v-else class="w-full flex flex-col items-start ml-7 -mt-6">
            <div class="font-spartan w-[68%]">
                <p class="__highlighted text-2xl font-bold leading-3 text-black underline decoration-1">{{ latest.title }}</p>
            </div>
            <div class="font-libre w-[90%] mt-3">
                <p class="text-base">
                    {{ latest.description }}
                    <br>
                        <p class="text-base text-base-yellow">Read More ...</p>
                    </br>
                </p>
            </div>
        </div>
    </div>
    
    <div class="w-full mt-5">
        <div class="flex flex-row justify-between items-center font-spartan ml-7 mr-3">
            <div class="flex flex-row items-center">
                <i class="bi bi-stars text-base"></i>
                <p class="mx-[6px] text-base">Featured</p>
            </div>
            <div class="flex flex-row items-center">
                <a class="mx-[6px] text-base" href="#">SEE ALL</a>
                <i class="bi bi-chevron-right text-base"></i>
            </div>
        </div>
        <div class="w-full pl-7 py-3.5">
            <!-- <Carousel :carousel_data = carousel_data class="py-2.5"/> -->
            <Carousel :carousel_data = featured class="py-2.5"/>
        </div>
    </div>
    <div class="pt-9 px-5">
        <div class="flex flex-row items-center mb-5">
            <span class="relative flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
            </span>
            <div class="flex flex-col items-start mx-2.5">
                <p class="text-sm font-medium">Post Feed</p>
                <p class="text-xs">THERE IS {{ postcounter }} POST NOW</p>
            </div>
        </div>
        <div id="post-feed" class="pb-2">
            <div v-for="(type, index) in feedPattern">
                <DetailedFeed v-if="type == 'embed'"
                    :post_id="feed[index].id"
                    :title="feed[index].title" 
                    :description="feed[index].description" 
                    :post_date="feed[index].post_at" 
                    :rtime="feed[index].rtime" 
                    :thumbnail="feed[index].thumbnail" 
                    :tag="feed[index].tag" 
                    :image_src="feed[index].thumbnail" />

                <LargeFeed v-else-if="type == 'large'" 
                    :post_id="feed[index].id"
                    :title="feed[index].title" 
                    :description="feed[index].description" 
                    :post_date="feed[index].post_at" 
                    :rtime="feed[index].rtime" 
                    :thumbnail="feed[index].thumbnail" 
                    :tag="feed[index].tag" />

                <SmallFeed v-else 
                    :post_id="feed[index].id"
                    :title="feed[index].title"
                    :post_date="feed[index].post_at" 
                    :rtime="feed[index].rtime" 
                    :thumbnail="feed[index].thumbnail" 
                    :tag="feed[index].tag"/>
            </div>
        </div>
        <div class="flex items-center justify-center mt-3">
            <a href="#" class="font-medium underline decoration-base-yellow decoration-[2px]">
                READ MORE
            </a>
        </div>
        <div class=".__ads-banner w-full max-h-40 rounded-[4px] mt-9 ">
            <div class="w-full h-40 bg-[#D9D9D9] rounded-[4px]"></div>
        </div>
        <SupportCard />
    </div>
</template>

<style scoped>
    .__highlighted {
        position: relative;
        display: inline;
        box-shadow: inset 0 -0.5em 0 rgb(255 165 0);
    }

    
    .__highlighted::first-line {
        color: white; 
    }

    
</style>

<script>
    import axios from 'axios';
    
    // Vue Components
    import Carousel from '@/components/Carousel.vue'
    import LargeFeed from '@/components/FeedBoardLarge.vue'
    import SmallFeed from '@/components/FeedBoardSmall.vue'
    import SideFeed from '@/components/FeedSideBoard.vue'
    import DetailedFeed from '@/components/FeedDetailed.vue'
    import SupportCard from '@/components/SupportCard.vue'

    export default{
        components : {
            Carousel,
            LargeFeed,
            SmallFeed,
            SideFeed,
            DetailedFeed,
            SupportCard,

        },
        data(){
            return {
                loading : false,
                error : '',
                latest : {},
                featured : {},
                feed : {},
                postcounter : 0,
                technology :{},
                electronics : {},
                feedPattern : [],
                feedCounter : 0,
            }
        },
        methods : {
            async fetchData(){
                const address = 'http://127.0.0.1:8000/api';
                const endpoint = address + '/gethome';
                this.loading = true;

                try{
                    const response = await axios.get(endpoint);
                    const resp_data = response.data.data;
                    this.splitFetchResponse(resp_data);
                    this.makeFeedPattern(this.feed);

                    console.log(this.feedPattern)
                    this.loading = false;
                }catch(error){
                    this.error = 'ERROR Fetch data';
                }
            },
            splitFetchResponse(response){
                this.latest = response.latest;
                this.featured = response.featured;
                this.feed = response.feed;
                this.postcounter = response.postcount;
                this.technology = response.tag_technology;
                this.electronics = response.tag_electronic;
            },
            makeFeedPattern(feeds){
                let counter = 0;
                const smallFeedCount = 2;
                feeds.forEach((feed) => {
                    if(feed.type === 'embed'){
                        this.feedPattern.push('embed');
                    }else{
                        (counter > smallFeedCount) ? counter = 0 : counter = counter;
                        (counter == 0) ? this.feedPattern.push('large') : this.feedPattern.push('small');
                        counter++;
                    }
                });
            },
            getImageUrl(img_name){
                return new URL(`../assets/images/${img_name}`, import.meta.url);
            }
        },
        computed :{
            getFeedPattern(){
                let counter = 0;
                const result = this.feedPattern[counter];
                console.log(counter);
                this.feedCounter++;
                return result;
            },
        },
        mounted(){
            this.fetchData();
        }
    }
</script>
