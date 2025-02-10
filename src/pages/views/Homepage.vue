<template>
    <div class="__homepage font-inter bg-base-navy text-white xl:px-4">
        <div v-if="toppattern != null" class="lg:flex lg:flex-row pt-6 justify-between lg:max-w-[1000px] lg:mx-auto xl:max-w-[1300px] xl:w-full">
            <div class="block">
                <section class="__jumbotron flex flex-col mx-4 border-b border-b-gray-600/80 md:w-[650px] md:mx-auto xl:w-[600px]">
                    <RouterLink :to="'/post/' + toppattern.jumbotron[0].id">
                        <div class="w-full h-[58.14vw] mb-2.5 md:h-[390px] xl:h-[354px]">
                            <img class="w-full h-full object-cover" :src="'http://127.0.0.1:8000/storage/thumbnail/' + toppattern.jumbotron[0].thumbnail">
                        </div>
                        <div class="w-full mb-4">
                            <div class="font-bold text-[7.46667vw] mb-2 font-montserrat leading-[1.2] md:text-[34px]">
                                {{ toppattern.jumbotron[0].title }} 
                            </div>
                            <p class="font-normal text-[4vw] leading-[1.3] md:text-base">
                            {{ toppattern.jumbotron[0].description }}
                            </p>
                            <span class="font-medium text-[3.25vw] text-base-blue md:text-base">Read more ...</span>
                        </div>
                    </RouterLink>
                </section>
                <section class="__top_card_gallery mt-4 md:w-[650px] md:mx-auto xl:w-[600px]">
                    <div class="grid grid-cols-1 px-4 space-y-4 md:flex md:flex-wrap md:justify-between md:px-0">
                        <template v-for="item in toppattern.toplarge">
                            <HorizontalLargeCard
                                :props_id    = "item.id"
                                :props_title = "item.title"
                                :props_tag   = "item.tag"
                                :props_date  = "item.created_at"
                            />
                        </template>
                        <template v-for="item in toppattern.small">
                            <HorizontalSmallCard class="lg:hidden"
                                :props_id    = "item.id"
                                :props_title = "item.title"
                                :props_tag   = "item.tag"
                                :props_date  = "item.created_at"   
                            />
                        </template>
                        <!-- hidden default until lg -->
                        <template v-for="item in toppattern.small.slice(0, 2)">
                            <HorizontalSmallCard class="hidden lg:block xl:hidden"
                                :props_id    = "item.id"
                                :props_title = "item.title"
                                :props_tag   = "item.tag"
                                :props_date  = "item.created_at"   
                            />
                        </template>
                        <div v-for="item in toppattern.botlarge">
                            <HorizontalLargeCard class="md:hidden"
                                :props_id    = "item.id"
                                :props_title = "item.title"
                                :props_tag   = "item.tag"
                                :props_date  = "item.created_at"
                            />
                            <VerticalLargeCard class="hidden md:block lg:hidden"
                                :props_id    = "item.id"
                                :props_title = "item.title"
                                :props_tag   = "item.tag"
                                :props_date  = "item.created_at"
                            />
                        </div>
                    </div>
                </section>
            </div>
            <div class="hidden lg:flex flex-col justify-between">
                <div class="__rtop_segment space-y-4">
                    <template v-for="item in toppattern.small.slice(2)">
                        <HorizontalSmallCard class="hidden lg:block xl:hidden"
                            :props_id    = "item.id"
                            :props_title = "item.title"
                            :props_tag   = "item.tag"
                            :props_date  = "item.created_at"   
                        />
                    </template>
                    <template v-for="item in toppattern.small">
                        <HorizontalSmallCard class="hidden xl:block "
                            :props_id    = "item.id"
                            :props_title = "item.title"
                            :props_tag   = "item.tag"
                            :props_date  = "item.created_at"   
                        />
                    </template>
                </div>
                <div class="__tbot_segment space-y-4">
                    <template v-for="item in toppattern.botlarge">
                        <VerticalLargeCard class="hidden lg:block xl:hidden"
                            :props_id    = "item.id"
                            :props_title = "item.title"
                            :props_tag   = "item.tag"
                            :props_date  = "item.created_at"
                        />
                    </template>
                </div>
            </div>
            <div class="hidden xl:flex flex-col justify-between">
                <template v-for="item in toppattern.botlarge">
                    <VerticalLargeCard class="hidden lg:block"
                        :props_id    = "item.id"
                        :props_title = "item.title"
                        :props_tag   = "item.tag"
                        :props_date  = "item.created_at"
                    />
                </template>
            </div>
        </div>
        <div class="mt-8 mx-4 md:w-[650px] md:mx-auto lg:w-[1000px] lg:mx-auto xl:max-w-[1300px] xl:w-full">
            <div class="__categories_title text-base-blue text-[3.2vw] font-bold md:text-[14px]">
                CATEGORIES
            </div>
            <div class="w-full flex flex-row items-center px-4 flex-wrap justify-center space-x-12 space-y-2 py-8">
                <div class="h-[6vw] md:h-[85px]">
                    <img src="../../assets/app_icons/logo-1.webp" class="w-full h-full">
                </div>
                <div class="h-[6vw] md:h-[85px]">
                    <img src="../../assets/app_icons/logo-2.webp" class="w-full h-full">
                </div>
                <div class="h-[6vw] md:h-[85px]">
                    <img src="../../assets/app_icons/logo-3.webp" class="w-full h-full">
                </div>
                <div class="h-[6vw] md:h-[85px]">
                    <img src="../../assets/app_icons/logo-4.webp" class="w-full h-full">
                </div>
                <div class="h-[6vw] md:h-[85px]">
                    <img src="../../assets/app_icons/logo-5.webp" class="w-full h-full">
                </div>
            </div>
        </div>
    </div>
    <!-- new content -->
    <section class="__post_feed mx-4 bg-white mt-12 pb-4 md:max-w-[585px] md:mx-auto xl:max-w-[1168px]">
        <div class="flex flex-col w-full">
            <div class="__post_feed_title flex flex-row items-start self-start">
                <i class="bi bi-filter-circle-fill text-[4.18vw] md:text-[20px]"></i>
                <div class="flex flex-col items-start mx-2 font-inter text-[3.2vw] md:text-[18px]">
                    <p class="font-semibold">Post Feed</p>
                    <p class="font-medium md:text-[14px]">
                        There is
                        <span class="text-base-blue">{{ postcounter }}</span>
                        post now
                    </p>
                </div>
            </div>
            <div class="flex flex-row flex-nowrap space-x-14 xl:hidden">
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

                        <SideFeed v-if="index == Math.ceil(feedPattern.length * 1/3)" class="my-8 xl:hidden"
                            card_topic="TECH"
                            card_color="blue"
                            :card_data="technology"
                        />
                        <SideFeed v-if="index == Math.ceil(feedPattern.length * 2/3)" class="my-8 xl:hidden"
                            card_topic="ELECTRONICS"
                            card_color="yellow"
                            :card_data="electronics"
                        />
                    </template>
                </div>
            </div>
            <div class="hidden relative h-auto xl:flex flex-row flex-nowrap space-x-14">
                <div class="flex flex-col space-y-4">
                    <template v-for="(type, index) in feedPattern">
                        <template v-if="index < (feedPattern.length / 2)">
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
                            </template>
                    </template>
                </div>
                <div class="h-auto">
                    <div class="h-3/4">
                        <SideFeed class="sticky top-[120px] overflow-hidden" 
                            card_topic="TECH"
                            card_color="blue"
                            :card_data="technology"
                        />
                    </div>
                </div>
            </div>
            <div class="hidden relative h-auto xl:flex flex-row flex-nowrap space-x-14">
                <div class="flex flex-col space-y-4">
                    <template v-for="(type, index) in feedPattern">
                        <template v-if="index >= (feedPattern.length / 2)">
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
                            </template>
                    </template>
                </div>
                <div class=" h-auto">
                    <div class="h-3/4">
                        <SideFeed class="sticky top-[120px] overflow-hidden" 
                            card_topic="ELECTRONICS"
                            card_color="yellow"
                            :card_data="electronics"
                        />
                    </div>
                </div>
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
                topcontent: [],
                toppattern: null,
                feed : [],
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
                    this.makeUpperPattern()

                    this.loading = false;
                }catch(error){
                    this.error = 'ERROR Fetch data';
                }
            },
            splitFetchResponse(response){
                response.feed.forEach((item, index)=>{
                    if((index + 1) <= 11){
                        this.topcontent.push(item)
                    }else{
                        this.feed.push(item)
                    }
                })
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
            makeUpperPattern(){
                let newPattern = {
                    "jumbotron" : [],
                    "toplarge" : [],
                    "small" : [],
                    "botlarge" : []
                }
                console.log(this.topcontent.length)
                this.topcontent.forEach((item, index)=>{
                    if((index + 1) == 1){
                        newPattern["jumbotron"].push(item)
                    }else if((index + 1) <= 3){
                        newPattern["toplarge"].push(item)
                    }
                    else if((index + 1) > (this.topcontent.length - 2)){
                        newPattern["botlarge"].push(item)
                    }else{
                        newPattern["small"].push(item)
                    }
                })

                this.toppattern = newPattern
                console.log(this.toppattern)
            },
            getImageUrl(img_name){
                const endpoint = 'http://127.0.0.1:8000/storage/thumbnail/'
                return new URL(endpoint + img_name, import.meta.url);
            },
            sideContainerScroll(event){
                const container = document.querySelector(".__sidefeed_container")
                const bound = container.getBoundingClientRect();
                if(!(bound.top <= window.innerHeight && bound.bottom > 0)){
                    // container not visible
                    return 
                }
                const cards = document.querySelectorAll(".__sidefeed_card")
                const nav_height = document.querySelector("#navbar").offsetHeight
                const sticky_point = nav_height
                cards.forEach((element)=>{
                    const element_bound = element.getBoundingClientRect()
                    if(element_bound.top <= sticky_point){
                        element.style.position = "sticky"
                        element.style.top = sticky_point + "px"
                        console.log("stick")
                    }
                })
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
            //window.addEventListener("scroll", this.sideContainerScroll);
        },
        onBeforeUnmount (){
            //window.removeEventListener("scroll", this.sideContainerScroll);
        }
    }
</script>
