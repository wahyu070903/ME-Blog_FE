<template>
    <RouterLink :to="'/post/' + post_id">
        <div ref="feedElement" class="hover:bg-gray-500/10 font-inter pb-5 border-b border-b-gray-600/80">
            <div class="relative w-full flex flex-col justify-center items-center pt-4 px-2">
                <div class="relative w-full h-full flex flex-col">
                    <div class="relative mx-auto">
                        <div class="flex flex-row items-center justify-between pb-1 text-[3.2vw] md:text-[14px]">
                            <div class="flex items-center">
                                <i class="bi bi-pin-angle text-[3.6vw] md:text-[16px]"></i>
                                <p class="mx-1">
                                    {{ formattedDate }}
                                </p>
                            </div>
                            <p class="">
                                {{ tag }}
                            </p>
                        </div>
                        <div class="w-[81.4vw] h-[46.511vw] md:w-[455px] md:h-[260px]">
                            <img :src="img_path + thumbnail" class="w-full h-full object-cover">
                        </div>
                        <div class="absolute top-10 left-0 -translate-x-full">
                            <div class="w-fit px-1.5 py-2.5 rounded-tl-sm rounded-bl-sm bg-base-blue">
                                <p class="__taglabel font-medium text-[3.2vw] leading-none text-white leading-1 md:text-[14px]">
                                    COMPE
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full mt-2.5 flex flex-col">
                        <div class="w-[80%]">
                            <p class="__feed-large-title line-clamp-3 text-black md:text-[20px]">
                                {{ title }}
                            </p>
                        </div>
                        <div class="w-full mt-3">
                            <p class="__feed-large-btext line-clamp-5">
                                {{ description }}
                            </p>
                        </div>
                    </div>
                    <div class="mt-3.5 w-full flex flex-row items-center">
                        <div class="flex flex-row items-center text-center">
                            <i class="bi bi-clock-history text-[4vw] md:text-[16px]"></i>
                            <p class="text-[3.2vw] mx-1.5 md:text-[14px]">{{ rtime }} MIN READ </p>
                        </div>
                        <div class="flex flex-row items-center mx-8">
                            <button class="flex flex-row items-center">
                                <i class="bi bi-hand-thumbs-up text-[4vw] md:text-[16px]"></i>
                                <p refs="likesNum" class="text-[3.2vw] mx-1 md:text-[14px]">10</p>
                            </button>
                            <button class="flex flex-row items-center mx-3">
                                <i class="bi bi-chat-left-dots text-[4vw] md:text-[16px]"></i>
                                <p class="text-[3.2vw] mx-1 md:text-[14px]">20</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </RouterLink>
</template>

<style scoped>
    .__taglabel{
        writing-mode: vertical-rl;
        transform: rotate(180deg);
    }

    .__feed-large-title{
        font-family: "Inter", serif;
        font-size: 4.8vw;
        line-height: 1.2;
        font-weight: bold;
    }

    .__feed-large-btext{
        font-family: "Inter", serif;
        font-size: 4vw;
        line-height: 1.3;
        font-weight: normal;
    }

    @media (min-width: 768px){
        .__feed-large-title{
            font-size: 20px;
        }

        .__feed-large-btext{
            font-size: 16px;
        }
    }
</style>

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

