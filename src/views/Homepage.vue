<template>
    <!-- Begin of Recent Post Display-->
    <div class="w-full px-24 pt-10">
        <div class="flex flex-row justify-between">
            <div id="a" class="relative w-[720px] h-[460px] flex-shrink-0 rounded text-white">
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
            <div id="b" class="w-full ml-12">
                <div class="flex flex-row items-center">
                    <p>Aug 10, 2024</p>
                    <div class="w-[2px] h-[16px] mx-1.5 bg-base-yellow"></div>
                    <p>TECH</p>
                </div>
                <p>NASA has recently announced a significant coverage agreement with United Launch Alliance (ULA) and Astrobotic for the upcoming Artemis robotic moon launch. This collaboration marks a key milestone in the Artemis program, which aims to return humans to the Moon and establish a sustainable presence. The partnership will ensure comprehensive media coverage of the mission, highlighting the critical role of ULA's launch capabilities and Astrobotic's advanced lunar robotics. This strategic alignment underscores NASA's commitment to transparency and public engagement, while also showcasing the innovative technologies driving humanity’s next great leap into space.</p>
                <button class="h-10 px-4 bg-base-yellow text-white flex flex-row items-center rounded-sm mt-10">
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
        <div class="px-24 pt-24 flex justify-center">
            <Carousel />
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
        <div class="ml-20 mt-9 flex flex-row">
            <div>
                <LargeFeedBoard />
                <SmallFeedBoard />
                <SmallFeedBoard />
                <LargeFeedBoard />
                <SmallFeedBoard />
                <SmallFeedBoard />
            </div>
            <div class="ml-24">
                <SideBoard />
                <SideBoard />
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

    export default{
        data(){
            return {

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
        },
        methods : {
            scrollObserver(){
                const nav = document.getElementById("navbar")
                const nav_height = nav.getBoundingClientRect().height
                const stream_title = document.getElementById("feedtitle")
                const stream_title_top = stream_title.getBoundingClientRect().top

                if(stream_title_top <= nav_height){
                    stream_title.classList.add("__sticked")
                }else{
                    stream_title.classList.remove("__sticked")
                }

                console.log("scrolled")
            }
        }
    };
</script>