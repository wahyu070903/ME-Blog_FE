<template>
    <RouterLink :to="'/post/' + post_id">
        <div class="hover:bg-gray-500/10 font-inter">
            <div class="w-full mb-4">
                <p class="text-[3.2vw] underline decoration-1 decoration-base-yellow text-gray-600 md:text-[14px]">
                    {{ tag }}
                </p>
                <div class="flex flex-row items-start justify-between">
                    <div class="flex flex-col">
                        <p class="text-[4.8vw] font-bold leading-[1.2] w-11/12 line-clamp-3 md:text-[24px]">
                            {{ title }}
                        </p>
                        <div class="flex flex-row items-center mt-2">
                            <p class="text-[3.2vw] md:text-[14px]">{{ formattedDate }}</p>
                            <div class="flex flex-row items-center mx-6">
                                <i class="bi bi-clock-history text-[4vw] leading-none md:text-[16px]"></i>
                                <p class="text-[3.2vw] leading-none mx-1.5 md:text-[14px]">
                                    {{ rtime }} MIN READ
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="w-[32vw] h-[24.65vw] md:w-[200px] md:h-[132px] flex-shrink-0">
                        <img :src="img_path + thumbnail" class="w-full h-full object-cover">
                    </div>
                </div>
                <div class="mt-4 flex flex-row items-center">
                    <p class="text-[4vw] leading-[1.3] line-clamp-2 md:text-[16px] lg:text-[20px] text-gray-600">
                        {{ description }}
                    </p>
                </div>
            </div>
            <div class="h-0.5 w-full bg-[#D9D9D9]"></div>
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

