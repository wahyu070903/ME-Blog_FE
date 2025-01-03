<template>
    <div class="flex flex-row items-start py-4">
        <div class="w-max-14">
            <div class="w-14 h-14">
                <img class="w-full h-full object-cover rounded-sm" src="../assets/images/person1.jpg">
            </div>
        </div>
        <div class="w-full ml-3">
            <p class="font-medium text-sm">Deep voice E-boy</p>
            <p class="text-xs mt-0.5 mb-1.5">Aug 10,2024</p>
            <p class="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis libero diam. Pellentesque condimentum erat ac orci posuere porta. Donec imperdiet sem ac felis mollis ultricies nec vel mi. Cras tempus sodales ante at vehicula. Nulla iaculis ligula mauris, vel dictum felis congue ut. Aenean metus sem, aliquet eu nibh non, condimentum vehicula ex. Integer eget iaculis metus. Vestibulum pharetra sapien non diam congue convallis. Aenean vel congue purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
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
        props :{
            profile_pic : String,
            username: String,
            post_date: String,
            content: String,
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