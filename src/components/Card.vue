<template>
    <RouterLink :to="'/post/'+ post_id">
        <div class="flex flex-col max-w-80 rounded drop-shadow-md">
            <img :src="img_path + img_src" class="w-full aspect-[320/192] object-cover rounded-t">
            <div class="flex flex-col px-3 bg-white">
                <p class="font-medium text-xs mt-3">{{  formattedDate }}</p>
                <p class="font-spartan font-medium text-xl mt-2 leading-5 line-clamp-3 min-h-[60px]"> {{ post_title }} </p>
                <p class="font-libre text-base mt-2 line-clamp-5"> {{post_desc}} </p>
                <div class="flex flex-row items-end mt-2.5 mb-3">
                    <i class="text-xs bi bi-clock-history"></i>
                    <p class=" text-center font-medium text-xs mx-1">{{ read_time }} MIN READ</p>
                </div>
            </div>
        </div>
    </RouterLink>    
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
        computed :{
            formattedDate(){
                let [year_now, month_now, day_now] = this.post_date.split("-");
                month_now = parseInt(month_now);
                return `${this.month_format[month_now]} ${day_now}, ${year_now}`;
            }
        },
        props : {
            post_id : Number,
            img_src : {
                type : String,
                default : 'nvidia-maxine-3d-featured.gif'
            },
            post_date : {
                type : String,
                default : 'Aug 20, 2024'
            },
            post_title : {
                type : String,
                default : 'Advancing Telepresence and Next-Generation Digital Humans with NVIDIA Maxine'
            },
            post_desc : {
                type : String,
                default : 'At SIGGRAPH 2024 this week, NVIDIA is showcasing the latest advancements in the NVIDIA Maxine AI developer platform, available through NVIDIA AI...'  
            },
            read_time : {
                type : Number,
                default : 99
            }
        }
    }
</script>