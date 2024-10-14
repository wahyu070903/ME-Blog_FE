<template>
    <div class="flex flex-col max-w-80 rounded drop-shadow-md">
        <img :src="img_path + img_src" class="w-full aspect-[320/192] object-cover rounded-t">
        <div class="flex flex-col px-3 bg-white">
            <p class="font-spartan leading-1 font-medium text-xs mt-3">{{  post_date }}</p>
            <p class="font-spartan font-medium text-base mt-2 leading-none"> {{ post_title }} </p>
            <p class="font-libre text-xs mt-2"> {{post_desc}} </p>
            <div class="flex flex-row items-end mt-2 mb-3">
                <i class="text-xs bi bi-clock-history"></i>
                <p class=" text-center font-medium text-xs mx-1">{{ read_time }} MIN READ</p>
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