<template>
    <RouterLink :to="'/post/' + props_id">
        <div class="__top_card __card_long w-full border-b border-b-gray-600/80 md:max-w-[300px]">
            <div class="flex flex-col items-start">
                <div class="w-full">
                    <p class="__card_title font-bold text-[4.8vw] mb-3 line-clamp-3 leading-[1.2] md:text-[20px]">
                        {{ props_title }}
                    </p>
                </div>
                <div class="w-full flex flex-row items-center text-[3.2vw] mb-4 md:text-[14px]">
                    <p class="font-medium mr-6 text-base-blue">{{ props_tag }}</p>
                    <p class="__card_date font-normal">{{ formattedDate }}</p>
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
            props_id: Number,
            props_title : String,
            props_tag   : String,
            props_date  : String,
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