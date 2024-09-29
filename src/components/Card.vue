<template>
    <div class="flex flex-col w-[200px] md:w-[308px] rounded">
        <img :src="img_path + img_src" class="w-full h-[120px] md:h-[180px] object-cover rounded">
        <div class="flex flex-col px-5 pt-1.5 md:pt-3 bg-white">
            <p class="text-[6px] md:text-xs">{{  post_date }}</p>
            <p class="text-[10px] md:text-xl mt-[3px] md:mt-1.5"> {{ post_title }} </p>
            <p class="text-[8px] md:text-sm mt-1 md:mt-2"> {{post_desc}} </p>
            <div class="flex flex-row items-center mt-2 mb-2 md:mt-7 md:mb-4">
                <i class="text-[8px] md:text-base bi bi-clock-history"></i>
                <p class="text-[6px] font-bold md:text-sm mx-1">{{ read_time }} MIN READ</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                img_path : '/src/assets/images/'
            }
        },
        props : {
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