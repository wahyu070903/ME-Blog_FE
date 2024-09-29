<template>
    <div class="relative w-[34rem] pt-4 pb-8 rounded-t-md rounded-bl-md" :class="card_color">
        <div class="flex flex-row items-center justify-between text-sm mx-6">
            <p>{{ card_topic }}</p>
            <button>
                <p class="underline">SEE ALL {{ card_topic }}</p>
            </button>
        </div>
        <p class="text-4xl w-[80%] mt-3 ml-10 font-bold font-notoSans">{{ card_data[0].title }}</p>
        <div class="flex flex-row items-center justify-between mt-4">
            <p class="ml-10">{{ card_data[0].date }}</p>
            <div class="mr-32">
                <button>
                    <i class="bi bi-hand-thumbs-up inline"></i>
                    <p class="inline ml-1">{{ card_data[0].likes }}</p>
                </button>
                <button class="ml-5">
                    <i class="bi bi-chat-left-dots inline"></i>
                    <p class="inline ml-1">{{ card_data[0].comments }}</p>
                </button>
            </div>
        </div>
        <div class="relative w-[74%] h-[15rem] rounded-[4px] mt-3.5 ml-5">
            <div class="absolute w-full h-full top-0 left-0 shadow-inner-side-streamcard"></div>
            <img class="w-full h-full object-cover rounded-[4px]" :src="img_path + card_data[0].img">
        </div>
        <div class="flex flex-col mt-8">
            <div class="w-[66%] flex flex-row ml-9 mb-2">
                <i class="bi bi-2-circle-fill text-2xl mr-3.5 text-white"></i>
                <div class="w-[90%] flex flex-col">
                    <p class="text-base">{{ card_data[1].title }}</p>
                    <div class="flex flex-row items-center mt-1.5">
                        <p class="text-xs">{{ card_data[1].date }}</p>
                        <button class="ml-4">
                            <i class="bi bi-hand-thumbs-up inline text-xs"></i>
                            <p class="inline ml-1 text-xs">{{ card_data[1].likes }}</p>
                        </button>
                        <button class="ml-5">
                            <i class="bi bi-chat-left-dots inline text-xs"></i>
                            <p class="inline ml-1 text-xs">{{ card_data[1].comments }}</p>
                        </button>
                    </div>
                </div>
            </div>
            <div class="w-[22rem] h-0.5 bg-white"></div>
            <div class="w-[66%] flex flex-row ml-9 mt-2 mb-2">
                <i class="bi bi-3-circle-fill text-2xl mr-3.5 text-white"></i>
                <div class="w-[90%] flex flex-col">
                    <p class="text-base">{{ card_data[2].title }}</p>
                    <div class="flex flex-row items-center mt-1.5">
                        <p class="text-xs">{{ card_data[2].date }}</p>
                        <button class="ml-4">
                            <i class="bi bi-hand-thumbs-up inline text-xs"></i>
                            <p class="inline ml-1 text-xs">{{ card_data[2].likes }}</p>
                        </button>
                        <button class="ml-5">
                            <i class="bi bi-chat-left-dots inline text-xs"></i>
                            <p class="inline ml-1 text-xs">{{ card_data[2].comments }}</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <p class="__topic absolute bottom-0 -right-4 text-8xl opacity-20 leading-no font-bayon">{{ card_topic }}</p>
    </div>
</template>

<style>
    .__topic{
        writing-mode: vertical-rl;
        transform: rotate(180deg);
    }
</style>

<script>
    export default{
        data(){
            return{
                img_path : '/src/assets/images/',
            }
        },
        props : {
            card_topic : String,
            card_color : String,
            card_data : Object
        },
    }
</script>