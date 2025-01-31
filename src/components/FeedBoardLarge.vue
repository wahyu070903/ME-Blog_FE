<template>
    <RouterLink :to="'/post/' + post_id">
        <div ref="feedElement" class="hover:bg-gray-500/10 font-inter">
            <div class="relative w-full flex flex-col justify-center items-center pt-4 px-2">
                <div class="relative w-full h-full">
                    <div class="relative max-w-[350px] mx-auto h-auto">
                        <div class="flex flex-row items-center justify-between pb-1 text-[3.2vw]">
                            <div class="flex items-center">
                                <i class="bi bi-pin-angle text-[3.6vw]"></i>
                                <p class="mx-1">{{ formattedDate }}</p>
                            </div>
                            <p class="">
                                {{ tag }}
                            </p>
                        </div>
                        <img :src="img_path + thumbnail" class="w-full h-full aspect-[35/20] object-cover">
                        <div :v-if="tag == 'TECHNOLOGY'">
                            <div class="absolute top-10 left-0 -translate-x-full w-fit px-0.5 py-2.5 rounded-tl-sm rounded-bl-sm bg-base-yellow">
                                <p class="__taglabel font-medium text-xs text-white leading-1">TECH</p>
                            </div>
                        </div>
                        <div :v-if="tag == 'ELECTRONICS'">
                            <div class="absolute top-10 left-0 -translate-x-full w-fit px-0.5 py-2.5 rounded-tl-sm rounded-bl-sm bg-base-blue">
                                <p class="__taglabel font-medium text-xs text-white leading-1">ELCH</p>
                            </div>
                        </div>
                        <div :v-if="tag == 'MECHANICAL'">
                            <div class="absolute top-10 left-0 -translate-x-full w-fit px-0.5 py-2.5 rounded-tl-sm rounded-bl-sm bg-base-yellow">
                                <p class="__taglabel font-medium text-xs text-white leading-1">MECH</p>
                            </div>
                        </div>
                        <div :v-if="tag == 'COMPUTER ENG'">
                            <div class="absolute top-10 left-0 -translate-x-full w-fit px-0.5 py-2.5 rounded-tl-sm rounded-bl-sm bg-base-blue">
                                <p class="__taglabel font-medium text-xs text-white leading-1">COMPE</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full h-auto mt-2.5">
                        <div class="w-[80%]">
                            <p class="__highlighted line-clamp-3 text-[4.8vw] leading-[1.2] font-bold text-black">
                                {{ title }}
                            </p>
                        </div>
                        <div class="w-full mt-3">
                            <p class="line-clamp-5 text-[4vw] leading-[1.3]">
                                {{ description }}
                            </p>
                        </div>
                    </div>
                    <div class="mt-3.5 w-full flex felx-row items-center">
                        <div class="flex flex-row items-center">
                            <i class="bi bi-clock-history text-xs"></i>
                            <p class="text-xs mx-1.5">{{ rtime }} MIN READ </p>
                        </div>
                        <div class="flex flex-row items-center mx-8">
                            <button class="flex flex-row items-center">
                                <i class="bi bi-hand-thumbs-up text-xs"></i>
                                <p refs="likesNum" class="text-xs mx-1">10</p>
                            </button>
                            <button class="flex flex-row items-center mx-3">
                                <i class="bi bi-chat-left-dots text-xs"></i>
                                <p class="text-xs mx-1">20</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full h-1.5 bg-[#D9D9D9] mt-5"></div>
        </div>
    </RouterLink>
</template>

<script>
    export default{
        data(){
            return {
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
        props: {
            post_id : Number,
            title : String,
            description : String,
            post_date : String,
            tag : String,
            thumbnail : String,
            rtime : Number,
        },
        computed: {
            formattedDate(){
                let [year_now, day_now, month_now] = this.post_date.split("-")
                month_now = month_now.split('T')[0]
                month_now = parseInt(month_now)
                return `${this.month_format[month_now]} ${day_now}, ${year_now}`
            }
        }
    }
</script>

