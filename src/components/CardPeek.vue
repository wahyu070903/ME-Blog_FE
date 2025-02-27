<template>
    <RouterLink :to="'/post/'+ id">
        <div class="flex flex-col items-center font-inter my-4 md:w-[650px]">
            <div class="flex flex-col items-start mx-4 md:mx-0">
                <div class="uppercase text-[3.72vw] md:text-[16px] font-medium text-base-blue">
                    {{ tag }}
                </div>
                <div class="font-bold text-[7.44vw] md:text-[38px] leading-[1.2]">
                    {{ title }}
                </div>
            </div>
            <div class="w-full h-[60vw] md:w-[650px] md:h-[390px] md:mx-auto my-4">
                <img :src="thumbnail_path + thumbnail" class="w-full h-full object-cover">
            </div>
            <div class="relative mx-4 md:mx-0">
                <p class="font-roboto text-[4.65vw] md:text-[20px] line-clamp-6">
                    {{ description }}
                </p>
                <div class="absolute w-full -translate-y-full h-3/4 bg-gradient-to-t from-white via-white/85 to-transparent">
                    <div class="w-full h-full flex items-center justify-center">
                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </RouterLink>
</template>

<script>
    export default {
        data(){
            return {
                thumbnail_path : "http://127.0.0.1:8000/storage/thumbnail/",
            }
        },
        props: {
            id          : Number,
            title       : String,
            tag         : String,
            description : String,
            thumbnail   : String
        }
    }
</script>