<template>
    <div ref="feedElement" class="hover:bg-gray-500/10">
        <div class="relative w-full flex flex-col justify-center items-center pt-4 px-2">
            <div class="relative w-full h-full">
                <div class="relative max-w-[350px] mx-auto h-auto">
                    <div class="flex flex-row items-center justify-between px-3 pb-1">
                        <div class="flex items-center">
                            <i class="bi bi-pin-angle text-xs"></i>
                            <p class="text-xs mx-0.5 ">{{ formattedDate }}</p>
                        </div>
                        <p class="text-xs font-sans">
                            {{ tag }}
                        </p>
                    </div>
                    <img :src="img_path + thumbnail" class="w-full h-full aspect-[35/20]">
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
                <!-- -mt-6 = text-2xl -->
                <div class="-mt-6 w-full h-auto">
                    <div class="w-[80%]">
                        <p class="__highlighted text-2xl font-bold leading-3 text-black underline decoration-1">
                            {{ title }}
                        </p>
                    </div>
                    <div class="w-full mt-3">
                        <p class="font-libre">
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
</template>



<style scoped>
    .__taglabel{
        writing-mode: vertical-rl;
        transform: rotate(180deg);
    }
    .__highlighted {
        position: relative;
        display: inline;
        box-shadow: inset 0 -0.5em 0 rgb(255 165 0);
    }
</style>

<script>
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
            title : String,
            description : String,
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

