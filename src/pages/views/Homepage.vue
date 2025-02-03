<template>
    <div class="__homepage font-inter bg-base-navy text-white xl:px-4">
        <div class="lg:flex lg:flex-row pt-6 justify-between lg:max-w-[1000px] lg:mx-auto xl:max-w-[1300px]">
            <div class="block">
                <section class="__jumbotron flex flex-col mx-4 border-b border-b-gray-600/80 md:w-[650px] md:mx-auto xl:w-[600px]">
                    <div class="w-full h-[58.14vw] mb-2.5 md:h-[390px] xl:h-[354px]">
                        <img class="w-full h-full object-cover" src="../../assets/images/street.gif">
                    </div>
                    <div class="w-full mb-4">
                        <div class="font-bold text-[7.46667vw] mb-2 font-montserrat leading-[1.2] md:text-[34px]">
                            NASA Set Coverage for ULA , Astrobotic Artemis Robotic 
                        </div>
                        <p class="font-normal text-[4vw] leading-[1.3] md:text-base">
                            NASA has recently announced a significant coverage agreement with United Launch Alliance (ULA) and Astrobotic for the upcoming Artemis robotic moon launch. This collaboration marks a key milestone.
                        </p>
                        <span class="font-medium text-[3.25vw] text-base-blue md:text-base">Read more ...</span>
                    </div>
                </section>
                <section class="__top_card_gallery mt-4 md:w-[650px] md:mx-auto xl:w-[600px]">
                    <div class="grid grid-cols-1 px-4 space-y-4 md:flex md:flex-wrap md:justify-between md:px-0">
                        <template v-for="items in 2">
                            <HorizontalLargeCard
                                props_title = "Advancing Telepresence and Next-Generation Digital"
                                props_tag   = "TECHNOLOGY"
                                props_date  = "Jan 28, 2025"
                            />
                        </template>
                        <template v-for="items in 6">
                            <HorizontalSmallCard class="lg:hidden"
                                props_title = "Advancing Telepresence and Next-Generation Digital"
                                props_tag   = "TECHNOLOGY"
                                props_date  = "Jan 28, 2025"   
                            />
                        </template>
                        <!-- hidden default until lg -->
                        <template v-for="items in 2">
                            <HorizontalSmallCard class="hidden lg:block xl:hidden"
                                props_title = "Advancing Telepresence and Next-Generation Digital"
                                props_tag   = "TECHNOLOGY"
                                props_date  = "Jan 28, 2025"   
                            />
                        </template>
                        <template v-for="items in 2">
                            <HorizontalLargeCard class="md:hidden"
                                props_title = "Advancing Telepresence and Next-Generation Digital"
                                props_tag   = "TECHNOLOGY"
                                props_date  = "Jan 28, 2025"
                            />
                            <VerticalLargeCard class="hidden md:block lg:hidden"
                                props_title = "Advancing Telepresence and Next-Generation Digital"
                                props_tag   = "TECHNOLOGY"
                                props_date  = "Jan 28, 2025"
                            />
                        </template>
                    </div>
                </section>
            </div>
            <div class="hidden lg:flex flex-col justify-between">
                <div class="__rtop_segment space-y-4">
                    <template v-for="items in 4">
                        <HorizontalSmallCard class="hidden lg:block xl:hidden"
                            props_title = "Advancing Telepresence and Next-Generation Digital"
                            props_tag   = "TECHNOLOGY"
                            props_date  = "Jan 28, 2025"   
                        />
                    </template>
                    <template v-for="items in 6">
                        <HorizontalSmallCard class="hidden xl:block "
                            props_title = "Advancing Telepresence and Next-Generation Digital"
                            props_tag   = "TECHNOLOGY"
                            props_date  = "Jan 28, 2025"   
                        />
                    </template>
                </div>
                <div class="__tbot_segment space-y-4">
                    <template v-for="items in 2">
                        <VerticalLargeCard class="hidden lg:block xl:hidden"
                            props_title = "Advancing Telepresence and Next-Generation Digital"
                            props_tag   = "TECHNOLOGY"
                            props_date  = "Jan 28, 2025"
                        />
                    </template>
                </div>
            </div>
            <div class="hidden xl:flex flex-col justify-between">
                <template v-for="items in 2">
                    <VerticalLargeCard class="hidden lg:block"
                        props_title = "Advancing Telepresence and Next-Generation Digital"
                        props_tag   = "TECHNOLOGY"
                        props_date  = "Jan 28, 2025"
                    />
                </template>
            </div>
        </div>
        <div class="__categories_title px-4 mt-8 text-base-blue text-[3.2vw] font-bold md:text-[14px]">
            CATEGORIES
        </div>
        <div class="w-full flex flex-row items-center px-4 flex-wrap justify-center space-x-12 space-y-2 py-8">
            <div class="h-[6vw]">
                <img src="../../assets/app_icons/logo-1.webp" class="w-full h-full">
            </div>
            <div class="h-[6vw]">
                <img src="../../assets/app_icons/logo-2.webp" class="w-full h-full">
            </div>
            <div class="h-[6vw]">
                <img src="../../assets/app_icons/logo-3.webp" class="w-full h-full">
            </div>
            <div class="h-[6vw]">
                <img src="../../assets/app_icons/logo-4.webp" class="w-full h-full">
            </div>
            <div class="h-[6vw]">
                <img src="../../assets/app_icons/logo-5.webp" class="w-full h-full">
            </div>
        </div>
    </div>
    <!-- new content -->
    <section class="__post_feed mx-4 bg-white mt-12 pb-4 md:max-w-[585px] md:mx-auto">
        <div class="flex flex-col w-full">
            <div class="__post_feed_title flex flex-row items-start self-start">
                <i class="bi bi-filter-circle-fill text-[4.18vw] md:text-[20px]"></i>
                <div class="flex flex-col items-start mx-2 font-inter text-[3.2vw] md:text-[18px]">
                    <p class="font-semibold">Post Feed</p>
                    <p class="font-medium md:text-[14px]">
                        There is
                        <span class="text-base-blue">1024</span>
                        post now
                    </p>
                </div>
            </div>
            <div class="__post_feed_content self-center flex flex-col space-y-4">
                <template v-for="(type, index) in feedPattern">
                    <LargeFeed v-if="type == 'large'" 
                        :post_id="feed[index].id"
                        :title="feed[index].title" 
                        :description="feed[index].description" 
                        :post_date="feed[index].created_at" 
                        :rtime="feed[index].rtime" 
                        :thumbnail="feed[index].thumbnail" 
                        :tag="feed[index].tag" />

                    <SmallFeed v-else-if="type == 'small'" 
                        :post_id="feed[index].id"
                        :title="feed[index].title"
                        :post_date="feed[index].created_at" 
                        :rtime="feed[index].rtime" 
                        :thumbnail="feed[index].thumbnail" 
                        :tag="feed[index].tag"/>

                    <SideFeed v-if="index == 3 || index == 6"/>
                </template>
            </div>
        </div>
    </section>
</template>
    
<style>
    .__hcard_title{
        width: calc(100% - 32.79vw);
    }
    
    .__categories_title{
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .__categories_title::after{
        content: "";
        display: block;
        width: 100%; 
        height: 1px; 
        background-color: #4b5563;
        opacity: 80; 
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
    import HorizontalLargeCard from '@/components/HorizontalLargeCard.vue';
    import HorizontalSmallCard from '@/components/HorizontalSmallCard.vue';
    import VerticalLargeCard from '@/components/VerticalLargeCard.vue';

    export default{
        components : {
            Carousel,
            LargeFeed,
            SmallFeed,
            SideFeed,
            DetailedFeed,
            SupportCard,
            HorizontalLargeCard,
            HorizontalSmallCard,
            VerticalLargeCard,
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
                const endpoint = 'http://127.0.0.1:8000/storage/thumbnail/'
                return new URL(endpoint + img_name, import.meta.url);
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
