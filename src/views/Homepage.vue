<template>
    <div class="w-full relative h-max">
        <div class="relative w-full h-[78vw]">
            <div class="absolute top-5 left-5">
                <i class="bi bi-lightning text-base text-white inline"></i>
                <p class="text-sm text-white inline mx-[6px] font-medium">RECENT POST</p>
            </div>
            <div class="absolute right-5 bottom-14">
                <i class="bi bi-clock-history text-white inline text-base"></i>
                <p class="text-sm text-white inline font-medium mx-[6px]">5 MIN READ</p>
            </div>
            <div class="w-full flex flex-col items-start absolute left-7 bottom-0 translate-y-3/4">
                <div class="font-spartan w-[68%]">
                    <p class="__highlighted text-2xl font-bold leading-3 text-black underline decoration-1">NASA Set Coverage for ULA , Astrobotic Artemis Robotic Moon Launch</p>
                </div>
                <div class="font-libre w-[90%] mt-3">
                    <p class="text-base">
                        NASA has recently announced a significant coverage agreement with United Launch Alliance (ULA) and Astrobotic for the upcoming Artemis robotic moon launch. This collaboration marks a key milestone.
                        <br>
                            <p class="text-base text-base-yellow">Read More ...</p>
                        </br>
                    </p>
                </div>
            </div>
            <img class="w-full h-full object-cover" src="../assets/images/astrobotic-photo.webp">
        </div>
    </div>
    <div class="mt-56 w-full">
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
            <Carousel :carousel_data = carousel_data class="py-2.5"/>
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
                <p class="text-xs">THERE IS 1024 POST NOW</p>
            </div>
        </div>
        <div id="post-feed" class="pb-2">
            <LargeFeed />
            <SmallFeed />
            <SmallFeed />
            <SideFeed card_topic="Technology" card_color="base-yellow" :card_data="side_data" />
            <DetailedFeed />
            <SmallFeed />
            <SmallFeed />
            <LargeFeed />
            <SideFeed card_topic="Electronics" card_color="base-blue" :card_data="side_data" />
            <SmallFeed />
            <SmallFeed />
            <DetailedFeed />
            <SmallFeed />
            <LargeFeed />
            <SmallFeed />
            <SmallFeed />
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

<style>
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
                carousel_data : [
                    {
                        img : 'street.gif',
                        post : '23 Aug, 2024',
                        title : 'Advancing Telepresence and Next-Generation Digital Humans with NVIDIA Maxine',
                        desc : 'Expanding the open-source Meta Llama collection of models, the Llama 3.2 collection includes vision language models (VLMs), small language models (SLMs), and an updated Llama Guard model with support for vision.',
                        rTime : 10,

                    },
                    {
                        img : 'nvidia-maxine-3d-featured.gif',
                        post : '23 Aug, 2024',
                        title : 'Advancing Telepresence and Next-Generation Digital Humans with NVIDIA Maxine',
                        desc : 'Expanding the open-source Meta Llama collection of models, the Llama 3.2 collection includes vision language models (VLMs), small language models (SLMs), and an updated Llama Guard model with support for vision.',
                        rTime : 10,

                    },
                    {
                        img : 'nvidia-ceo.webp',
                        post : '23 Aug, 2024',
                        title : 'Advancing Telepresence and Next-Generation Digital Humans with NVIDIA Maxine',
                        desc : 'Expanding the open-source Meta Llama collection of models, the Llama 3.2 collection includes vision language models (VLMs), small language models (SLMs), and an updated Llama Guard model with support for vision.',
                        rTime : 10,

                    },
                    {
                        img : 'isaac-robotics.png',
                        post : '23 Aug, 2024',
                        title : 'Advancing Telepresence and Next-Generation Digital Humans with NVIDIA Maxine',
                        desc : 'Expanding the open-source Meta Llama collection of models, the Llama 3.2 collection includes vision language models (VLMs), small language models (SLMs), and an updated Llama Guard model with support for vision.',
                        rTime : 10,

                    },
                    {
                        img : 'drone.jpg',
                        post : '23 Aug, 2024',
                        title : 'hello world',
                        desc : 'Expanding the open-source Meta Llama collection of models, the Llama 3.2 collection includes vision language models (VLMs), small language models (SLMs), and an updated Llama Guard model with support for vision.',
                        rTime : 10,

                    }
                ],
                side_data : [
                    {
                        img : 'shark.gif',
                        post : '23 Aug, 2024',
                        title : 'Advancing Telepresence and Next-Generation Digital Humans with NVIDIA Maxine',
                        desc : 'Expanding the open-source Meta Llama collection of models, the Llama 3.2 collection includes vision language models (VLMs), small language models (SLMs), and an updated Llama Guard model with support for vision.',
                        rTime : 10,
                    },
                    {
                        img : 'shark.gif',
                        post : '23 Aug, 2024',
                        title : 'Advancing Telepresence and Next-Generation Digital Humans with NVIDIA Maxine',
                        desc : 'Expanding the open-source Meta Llama collection of models, the Llama 3.2 collection includes vision language models (VLMs), small language models (SLMs), and an updated Llama Guard model with support for vision.',
                        rTime : 10,
                    },
                    {
                        img : 'shark.gif',
                        post : '23 Aug, 2024',
                        title : 'Advancing Telepresence and Next-Generation Digital Humans with NVIDIA Maxine',
                        desc : 'Expanding the open-source Meta Llama collection of models, the Llama 3.2 collection includes vision language models (VLMs), small language models (SLMs), and an updated Llama Guard model with support for vision.',
                        rTime : 10,
                    }
                ]
            }
        }
    }
</script>
