<template>
    <div class="w-full flex flex-row py-4 px-2 hover:bg-gray-500/10">
        <div class="mr-2.5 py-4">
            <img src="../assets/app_icons/topic-icon-m.svg" class="w-6">
        </div>
        <div class="w-full">
            <div class="w-full flex flex-row items-center">
                <p class="text-xs font-base">{{ formattedDate }}</p>
                <div class="flex flex-row items-center ml-11">
                    <i class="bi bi-clock-history text-xs"></i>
                    <p class="text-xs mx-1 font-base">{{ rtime }} MIN READ</p>
                </div>
            </div>
            <div class="mt-1">
                <p class="leading-5 line-clamp-[10]">
                    <span class="font-spartan text-lg font-semibold leading-3">
                        {{ title }}
                    </span>
                    <span class="font-libre">
                        {{ description }}
                    </span>
                </p>
            </div>
            <div class="max-w-80 h-auto rounded-sm mt-3">
                <img src="../assets/images/monitor-chat.png" class="w-full h-full object-cover aspect-[320/168] rounded-sm">
            </div>
            <div class="mt-4">
                <p class="font-libre text-xs text-[#575757] line-clamp-2">Got Lego? You can use it to further upgrade your Framework laptop with this 3D-printed adapter.</p>
            </div>
            <div class="w-full flex flex-row justify-end mt-1">
                <div class="flex flex-row items-center">
                    <button class="flex flex-row items-center">
                        <i class="bi bi-hand-thumbs-up text-xs"></i>
                        <p class="text-xs mx-1">10</p>
                    </button>
                    <button class="flex flex-row items-center mx-3">
                        <i class="bi bi-chat-left-dots text-xs"></i>
                        <p class="text-xs mx-1">20</p>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

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
            image_src : String,
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