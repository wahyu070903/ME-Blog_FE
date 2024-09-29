<template>
    <!-- Begin of Recent Post Display-->
    <div id="recent-post" class="w-full px-24 pt-10 overflow-hidden">
        <div class="flex flex-row justify-between">
            <div id="recent-image" class="relative w-[720px] h-[460px] flex-shrink-0 rounded text-white">
                <div class="absolute top-0 left-0 w-full h-full shadow-inner-recent-post z-100 rounded"></div>
                <img class="w-full h-full object-cover rounded" src="../assets/images/astrobotic-photo.webp">
                <div class="absolute top-4 left-6 flex flex-row items-center">
                    <i class="bi bi-lightning-charge text-base"></i>
                    <p class="mx-1 text-sm">RECENT POST</p>
                </div>
                <div class="absolute bottom-9 left-8">
                    <div class="flex flex-row items-center my-3">
                        <i class="bi bi-clock-history text-base"></i>
                        <p class="mx-1.5 text-sm">5 MIN READ</p>
                    </div>
                    <p class="text-2xl">NASA Set Coverage for ULA , Astrobotic Artemis Robotic Moon Launch</p>
                </div>
            </div>
            <div id="recent-info" class=" w-full ml-12">
                <div class="flex flex-row items-center">
                    <p>Aug 10, 2024</p>
                    <div class="w-[2px] h-[16px] mx-1.5 bg-base-yellow"></div>
                    <p>TECH</p>
                </div>
                <p>NASA has recently announced a significant coverage agreement with United Launch Alliance (ULA) and Astrobotic for the upcoming Artemis robotic moon launch. This collaboration marks a key milestone in the Artemis program, which aims to return humans to the Moon and establish a sustainable presence. The partnership will ensure comprehensive media coverage of the mission, highlighting the critical role of ULA's launch capabilities and Astrobotic's advanced lunar robotics. This strategic alignment underscores NASA's commitment to transparency and public engagement, while also showcasing the innovative technologies driving humanity’s next great leap into space.</p>
                <button class="h-10 px-4 py-1.5 bg-base-yellow text-white flex flex-row items-center rounded-sm mt-10 hover:bg-base-yellow/80 focus:ring-4 focus:outline-none focus:ring-gray-100 duration-150">
                    <p class="mr-3.5">More Details</p>
                    <i class="bi bi-arrow-down-right-square-fill text-xl"></i>
                </button>
            </div>
        </div>
    </div>
    <!-- End of recent post display -->
    
    <!-- Carousel -->
    <div class="relative mt-9 bg-[#EEEEEE]">
        <div class="absolute top-14 left-16">
            <i class="bi bi-stars text-2xl inline"></i>
            <p class="inline mx-2">Featured</p>
        </div>
        <div class="px-24 py-24 flex justify-center">
            <Carousel :carousel_data="carousel_data" />
        </div>
    </div>

    <!-- Post Feed -->
    <div>
        <!-- important to change this top-[118px] to dynamic next -->
        <div id="feedtitle" class="flex flex-row pl-16 mt-12 sticky top-[118px] z-40 bg-white py-2">  
            <i class="bi bi-filter-circle-fill text-2xl"></i>
            <div class="flex flex-col items-start mx-2">
                <p class="text-xl">Post Feed</p>
                <p class="text-sm">THERE IS 1024 POST NOW</p>
            </div>
        </div>
        <div id="feed-container" class="ml-20 mt-9 flex flex-row">
            <div>
                <div class="__feed-segment">
                    <LargeFeedBoard />
                    <SmallFeedBoard />
                    <SmallFeedBoard />
                    <LargeFeedBoard />
                    <SmallFeedBoard />
                    <SmallFeedBoard />
                </div>
            </div>
            <div class="ml-24">
                <SideBoard class="__feed-sede sticky"/>
                <SideBoard class="__feed-side"/>
            </div>
        </div>
    </div>
</template>

<style>
    .__sticked{
        border-bottom: 1px solid #cccccc;
    }
</style>

<script>
    import Carousel from '../components/Carousel.vue'
    import LargeFeedBoard from '../components/FeedBoardLarge.vue'
    import SmallFeedBoard from '../components/FeedBoardSmall.vue'
    import SideBoard from '../components/FeedSideBoard.vue'
    import anime from 'animejs/lib/anime.es.js';
    import { initFlowbite} from 'flowbite'

    export default{
        data(){
            return {
                carousel_data : [
                    {
                        img : "nvidia-maxine-3d-featured.gif",
                        post : "Aug 20, 2024",
                        title : "Advancing Telepresence and Next-Generation Digital Humans with NVIDIA Maxine",
                        desc : "At SIGGRAPH 2024 this week, NVIDIA is showcasing the latest advancements in the NVIDIA Maxine AI developer platform, available through NVIDIA AI...",
                        rTime : 5
                    },
                    {
                        img : "nvidia-ceo.webp",
                        post : "Aug 23, 2024",
                        title : "Advancing Telepresence and Next-Generation Digital Humans with NVIDIA Maxine",
                        desc : "At SIGGRAPH 2024 this week, NVIDIA is showcasing the latest advancements in the NVIDIA Maxine AI developer platform, available through NVIDIA AI...",
                        rTime : 10
                    },
                    {
                        img : "plc.jpg",
                        post : "Aug 20, 2024",
                        title : "Advancing Telepresence and Next-Generation Digital Humans with NVIDIA Maxine",
                        desc : "At SIGGRAPH 2024 this week, NVIDIA is showcasing the latest advancements in the NVIDIA Maxine AI developer platform, available through NVIDIA AI...",
                        rTime : 25
                    },
                    {
                        img : "monitor-chat.png",
                        post : "Aug 16, 2024",
                        title : "Advancing Telepresence and Next-Generation Digital Humans with NVIDIA Maxine",
                        desc : "At SIGGRAPH 2024 this week, NVIDIA is showcasing the latest advancements in the NVIDIA Maxine AI developer platform, available through NVIDIA AI...",
                        rTime : 5
                    },
                    {
                        img : "street.gif",
                        post : "Aug 18, 2024",
                        title : "Advancing Telepresence and Next-Generation Digital Humans with NVIDIA Maxine",
                        desc : "At SIGGRAPH 2024 this week, NVIDIA is showcasing the latest advancements in the NVIDIA Maxine AI developer platform, available through NVIDIA AI...",
                        rTime : 15
                    },
                    {
                        img : "drone.jpg",
                        post : "Aug 24, 2024",
                        title : "Advancing Telepresence and Next-Generation Digital Humans with NVIDIA Maxine",
                        desc : "At SIGGRAPH 2024 this week, NVIDIA is showcasing the latest advancements in the NVIDIA Maxine AI developer platform, available through NVIDIA AI...",
                        rTime : 2
                    },
                    
                ],

                sticky_height : 0,
                recent_isHidden : false,
                sideboard_count : 3,

            }
        }, 
        components :{
            Carousel : Carousel,
            LargeFeedBoard : LargeFeedBoard,
            SmallFeedBoard : SmallFeedBoard,
            SideBoard : SideBoard
        },
        mounted(){
            window.addEventListener("scroll", this.scrollObserver)
            initFlowbite()
            this.animateRecentPost()
            
        },
        methods : {
            scrollObserver(){
                // recent post re-animation
                const recent_post = document.getElementById("recent-post").getBoundingClientRect()
                if(recent_post.bottom < 0){
                    this.recent_isHidden = true
                }else if(this.recent_isHidden){
                    this.animateRecentPost()
                    this.recent_isHidden = false
                }

                // stream title sticky
                const nav = document.getElementById("navbar")
                const nav_height = nav.getBoundingClientRect().height
                const stream_title = document.getElementById("feedtitle")
                const stream_title_top = stream_title.getBoundingClientRect().top

                if(stream_title_top <= nav_height){
                    stream_title.classList.add("__sticked")
                    this.sticky_height = stream_title.offsetHeight + 118
                }else{
                    stream_title.classList.remove("__sticked")
                    this.sticky_height = 0
                }

                // feed sticky event
                const feed_seg = document.querySelectorAll(".__feed-segment")
                const feed_side = document.querySelectorAll(".__feed-side")

                feed_seg.forEach((element,index) => {
                    const feed_bounding = element.getBoundingClientRect()
                    const side_bounding = feed_side[index].getBoundingClientRect()
                    
                });
                
            },
            animateRecentPost(){
                const recent_img = document.getElementById("recent-image")
                const recent_info = document.getElementById("recent-info")
                // animate recent display
                anime({
                    targets: [recent_img, recent_info],
                    translateX : ["-100%","0%"],
                    duration : 1200,
                    easing: 'easeOutElastic(1, .6)',
                })
            },
        }
    };
</script>