<template>
    <RouterLink :to="'/post/' + props_id">
        <div class="__top_card __vcard_large w-full border-b border-b-gray-600/80 md:w-[300px]">
            <div class="flex flex-col w-full items-center justify-between mb-2.5">
                <div class="w-[29vw] h-[17.45vw] md:h-[180px] md:w-[300px]">
                    <img class="w-full h-full object-cover" src="../assets/images/drone.jpg">
                </div>
                <div class="flex flex-col items-start mt-3">
                    <div class="__vcard_title font-bold text-[4.8vw] line-clamp-3 leading-[1.2] md:text-[24px]">
                        {{ props_title }}
                    </div>
                    <div class="flex flex-row items-center text-[3.2vw] mt-2 w-full md:text-[14px]">
                        <p class="font-medium text-base-blue mr-6">{{ props_tag }}</p>
                        <p class="__hcard_date font-medium">{{ formattedDate }}</p>
                    </div>
                </div>
            </div>  
        </div>
    </RouterLink>
</template>

<script>
    export default{
        data(){
            return{
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
            props_id      : Number,
            props_title   : String,
            props_tag     : String,
            props_date    : String,
            props_image   : String,
        },
        computed: {
            formattedDate(){
                let [year_now, day_now, month_now] = this.props_date.split("-")
                month_now = month_now.split('T')[0]
                month_now = parseInt(month_now)
                return `${this.month_format[month_now]} ${day_now}, ${year_now}`
            }
        }
    }
</script>