<template>
    <div class="__top_card __card_long w-full border-b border-b-gray-600/80 md:max-w-[300px]">
        <div class="flex flex-col items-start">
            <div class="w-full">
                <p class="__card_title font-bold text-[4.8vw] mb-3 line-clamp-3 leading-[1.2] md:text-[20px]">
                    {{ props_title }}
                </p>
            </div>
            <div class="w-full flex flex-row items-center text-[3.2vw] mb-4 md:text-[14px]">
                <p class="font-medium mr-6 text-base-blue">{{ props_tag }}</p>
                <p class="__card_date font-normal">{{ props_date }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{

            }
        },
        props: {
            props_title : String,
            props_tag   : String,
            props_date  : String,
        }
    }
</script>