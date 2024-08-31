<template>
    <div class="flex flex-col w-[308px] h-[420px]">
        <img :src="img_path + img_src" class="w-full h-[180px] object-cover">
        <div class="flex flex-col">
            <p>Aug 20, 2024</p>
            <p>Advancing Telepresence and Next-Generation Digital Humans with NVIDIA Maxine</p>
            <p>At SIGGRAPH 2024 this week, NVIDIA is showcasing the latest advancements in the NVIDIA Maxine AI developer platform, available through NVIDIA AI...</p>
            <div class="flex flex-row items-center">
                <i class="bi bi-clock-history"></i>
                <p>5 MIN READ</p>
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