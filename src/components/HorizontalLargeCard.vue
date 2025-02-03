<template>
    <div class="__top_card __hcard_large w-full border-b border-b-gray-600/80">
        <div class="flex flex-row w-full items-center justify-between flex-wrap mb-2.5 md:flex-nowrap md:items-start">
            <div class="w-[29vw] h-[17.45vw] md:h-[180px] md:min-w-[300px] md:w-[300px] xl:min-w-[230px] xl:w-[230px] xl:h-[140px]">
                <img class="w-full h-full object-cover" src="../assets/images/drone.jpg">
            </div>
            <div class="__hcard_title font-bold text-[4.8vw] line-clamp-3 leading-[1.2] md:hidden">
                {{ props_title }}
            </div>
            <div class="flex flex-row items-center text-[3.2vw] mt-2 w-full md:hidden">
                <p class="font-medium text-base-blue mr-6">{{ props_tag }}</p>
                <p class="__hcard_date font-medium">{{ props_date }}</p>
            </div>
            <!-- hidden default -->
            <div class="hidden md:flex flex-col items-start ml-5">
                <div class="w-full font-bold line-clamp-3 leading-[1.2] text-[24px] mb-1">
                    {{ props_title }}
                </div>
                <div class="w-full text-[14px]">
                    <p class="font-medium text-base-blue mb-3">{{ props_tag }}</p>
                    <p class="__hcard_date font-medium">{{ props_date }}</p>
                </div>
            </div>
        </div>  
    </div>
</template>

<style scoped>
    .__hcard_title{
        width: calc(100% - 32.79vw);
    }

</style>

<script>
    export default{
        data(){
            return{

            }
        },
        props: {
            props_title   : String,
            props_tag     : String,
            props_date    : String,
            props_image   : String,
        }
    }
</script>