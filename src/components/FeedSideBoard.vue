<template>
    <div class="w-full flex justify-end items-end">
        <div class="relative max-w-[294px] h-auto bg-base-yellow pt-3 px-3 my-8 rounded-t-md rounded-bl-md">
            <div class="flex flex-row items-center justify-between">
                <p class="text-xs">TECHNOLOGY</p>
                <a href="#" class="text-xs underline decoration-1">SEE ALL TECHNOLOGY</a>
            </div>
            <div class="w-[82%] ml-3 mt-3.5">
                <p class="w-full text-2xl font-bold font-spartan leading-6 line-clamp-3">​​Real-Time AI Shark Detection is Boosting Beach Safety</p>
            </div>
            <div class="mt-6 max-w-[222px]">
                <div class="flex flex-row items-center justify-between">
                    <p class="text-xs">Aug 10, 2024</p>
                    <div class="flex flex-row items-center">
                        <div class="flex flex-row items-center">
                            <i class="bi bi-hand-thumbs-up text-xs"></i>
                            <p class="text-xs mx-1">10</p>
                        </div>
                        <div class="flex flex-row items-center ml-2">
                            <i class="bi bi-chat-left-dots text-xs"></i>
                            <p class="text-xs ml-1">10</p>
                        </div>
                    </div>
                </div>
                <img src="../assets/images/shark.gif" class="w-full h-full aspect-[222/142] rounded-[4px] mt-1.5">
            </div>
            <div class="w-11/12">
                <div v-for="items in 2">
                    <div :class="items == 1 ? '__first-card':''" class="flex flex-row items-start py-3">
                        <i class="bi bi-2-circle-fill text-[22px] text-white"></i>
                        <div class="flex flex-col mx-2">
                            <p class="text-base font-spartan font-medium leading-4 line-clamp-3">Build VLM-Powered Visual AI Agents Using NVIDIA NIM and NVIDIA VIA Microservices</p>
                            <div class="flex flex-row items-center mt-1.5">
                                <p class="text-xs font-spartan">Aug 20, 2024</p>
                                <div class="flex flex-row items-center ml-3.5">
                                    <div class="flex flex-row items-center">
                                        <i class="bi bi-hand-thumbs-up text-xs font-spartan"></i>
                                        <p class="text-xs mx-1 font-spartan">10</p>
                                    </div>
                                    <div class="flex flex-row items-center ml-2">
                                        <i class="bi bi-chat-left-dots text-xs font-spartan"></i>
                                        <p class="text-xs ml-1 font-spartan">10</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="absolute top-9 left-0 -translate-x-full">
                <p class="__jumbo-label font-bayon text-[64px] leading-10">TECHNOLOGY</p>
            </div>
        </div>
    </div>
</template>

<style>
    .__topic{
        writing-mode: vertical-rl;
        transform: rotate(180deg);
    }
    .__first-card{
        border-bottom: 2px solid white;
    }
    .__jumbo-label{
        writing-mode: vertical-lr;
        transform: rotate(180deg);
    }
</style>

<script>
    export default{
        data(){
            return{
                img_path : '/src/assets/images/',
            }
        },
        props : {
            card_topic : String,
            card_color : String,
            card_data : Object
        },
    }
</script>