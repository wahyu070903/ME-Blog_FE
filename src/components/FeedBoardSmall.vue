<template>
    <RouterLink :to="'/post/' + post_id">
        <div class="pt-4 hover:bg-gray-500/10">
            <div class="w-full px-2 mb-4">
                <p class="text-xs underline decoration-1 decoration-base-yellow">{{ tag }}</p>
                <div class="flex flex-row items-center mt-1.5">
                    <div class="flex flex-col w-full">
                        <p class="text-xl font-spartan font-bold leading-5 w-11/12 line-clamp-3">
                            {{ title }}
                        </p>
                        <div class="flex flex-row items-center mt-2">
                            <p class="text-xs">{{ formattedDate }}</p>
                            <div class="flex flex-row items-center mx-6">
                                <i class="bi bi-clock-history text-xs"></i>
                                <p class="text-xs mx-1.5">{{ rtime }} MIN READ</p>
                            </div>
                        </div>
                        <div class="mt-1 flex flex-row items-center">
                            <div class="flex flex-row items-center">
                                <i class="bi bi-hand-thumbs-up text-xs"></i>
                                <p class="text-xs mx-1">10</p>
                            </div>
                            <div class="flex flex-row items-center mx-2">
                                <i class="bi bi-chat-left-dots text-xs"></i>
                                <p class="text-xs mx-1">10</p>
                            </div>
                        </div>
                    </div>
                    <div class="max-w-20 max-h-20 rounded-sm">
                        <img :src="img_path + thumbnail" class="w-full h-full object-cover aspect-[1/1] rounded-sm">
                    </div>
                </div>
            </div>
            <div class="h-0.5 w-full bg-[#D9D9D9]"></div>
        </div>
    </RouterLink>
</template>

<script>
import { RouterLink } from 'vue-router';

    export default{
        data(){
            return {
                img_path : '/src/assets/images/',
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
        props: {
            post_id : Number,
            title : String,
            post_date : String,
            tag : String,
            thumbnail : String,
            rtime : Number,
        },
        computed: {
            formattedDate(){
                let [year_now, month_now, day_now] = this.post_date.split("-");
                month_now = parseInt(month_now);
                return `${this.month_format[month_now]} ${day_now}, ${year_now}`;
            }
        }
    }
</script>

