<template>
    <div v-if="card_data.length" class="w-full flex justify-end items-end">
        <div class="relative max-w-[68.37vw] h-auto pt-3 px-3 md:max-w-[530px]" :class="['bg-base-' + card_color]">
            <div class="flex flex-row items-center justify-between text-[3.2vw] md:text-[14px]">
                <p class="uppercase">{{ card_topic }}</p>
                <a href="#" class="underline decoration-1">SEE ALL TECHNOLOGY</a>
            </div>
            <div class="w-[82%] ml-3 mt-3.5">
                <p class="w-full text-[5.58vw] font-bold font-spartan leading-[1.2] line-clamp-3 md:text-[36px]">
                    ​​{{ card_data[0].title }}
                </p>
            </div>
            <div class="mt-6 max-w-[51.62vw] md:max-w-[400px]">
                <div class="flex flex-row items-center justify-between text-[3.2vw] md:text-[14px]">
                    <p class="">{{ formattedDate(card_data[0].created_at) }}</p>
                    <div class="flex flex-row items-center">
                        <div class="flex flex-row items-center">
                            <i class="bi bi-hand-thumbs-up text-[3.4vw] md:text-[16px]"></i>
                            <p class="mx-1">10</p>
                        </div>
                        <div class="flex flex-row items-center ml-2">
                            <i class="bi bi-chat-left-dots text-[3.4vw] md:text-[16px]"></i>
                            <p class="ml-1">10</p>
                        </div>
                    </div>
                </div>
                <div class="w-full h-[33vw] md:h-[240px]">
                    <img :src="getImageUrl(card_data[0].thumbnail)" class="w-full h-full mt-1.5 object-cover">
                </div>
            </div>  
            <div class="w-11/12 md:max-w-[400px]">
                <div v-for="index in 2">
                    <div :class="index == 1 ? '__first-card':''" class="flex flex-row items-start py-3">
                        <i v-if="index == 1" class="bi bi-2-circle-fill text-[5.12vw] text-white md:text-[28px]"></i>
                        <i v-else class="bi bi-3-circle-fill text-[5.12vw] text-white md:text-[28px]"></i>
                        <div class="flex flex-col mx-2">
                            <p class="text-[3.72vw] font-medium leading-[1.2] line-clamp-3 md:text-[20px]">
                                {{ card_data[index].title }}
                            </p>
                            <div class="flex flex-row items-center mt-1.5">
                                <p class="text-xs">{{ formattedDate(card_data[index].created_at) }}</p>
                                <div class="flex flex-row items-center ml-3.5 text-[3.2vw] md:text-[14px]">
                                    <div class="flex flex-row items-center">
                                        <i class="bi bi-hand-thumbs-up text-[3.4vw] md:text-[16px]"></i>
                                        <p class="mx-1">10</p>
                                    </div>
                                    <div class="flex flex-row items-center ml-2">
                                        <i class="bi bi-chat-left-dots text-[3.4vw] md:text-[16px]"></i>
                                        <p class="ml-1">10</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="absolute top-9 left-0 -translate-x-full md:translate-x-0 md:top-auto md:left-auto md:-bottom-1.5 md:right-0 z-20">
                <p class="__jumbo-label font-bayon text-[14.88vw] leading-[9.44vw] md:text-[96px] md:leading-[60px] md:opacity-40">
                    {{ card_topic }}
                </p>
            </div>
        </div>
    </div>
</template>

<style>
    .__first-card{
        border-bottom: 2px solid white;
    }
    .__jumbo-label{
        writing-mode: vertical-lr;
        transform: rotate(180deg);
        display: inline-block;
    }
</style>

<script>
    export default{
        data(){
            return{
                img_path : 'http://127.0.0.1:8000/storage/thumbnail/',
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
            }
        },
        props : {
            card_topic : {
                type: String,
                default: "TECH"
            },
            card_color : {
                type: String,
                default: "blue"
            },
            card_data : {
                type : Object,
                default : () => [
                    {
                        title : "Boosting AI-Driven Innovation in 6G with the AI-RAN Alliance, 3GPP.",
                        created_at : "2025-01-11",
                        thumbnail : "drone.jpg"
                    },
                    {
                        title : "Boosting AI-Driven Innovation in 6G with the AI-RAN Alliance, 3GPP.",
                        created_at : "2025-01-11",
                        thumbnail : "drone.jpg"
                    },
                    {
                        title : "Boosting AI-Driven Innovation in 6G with the AI-RAN Alliance, 3GPP.",
                        created_at : "2025-01-11",
                        thumbnail : "drone.jpg"
                    }
                ]
            }
        },
        methods :{
            getImageUrl(img_name){
                return new URL(`../assets/images/${img_name}`, import.meta.url)
            },
            formattedDate(date){
                let [year_now, day_now, month_now] = date.split("-")
                month_now = month_now.split('T')[0]
                month_now = parseInt(month_now)
                return `${this.month_format[month_now]} ${day_now}, ${year_now}`
            }
        }
    }
</script>