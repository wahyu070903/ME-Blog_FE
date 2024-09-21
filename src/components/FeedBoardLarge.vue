<template>
    <div class="block">
        <div class="w-[520px] flex flex-row items-center justify-between px-3">
            <div class="flex flex-row items-center">
                <i class="bi bi-pin-angle"></i>
                <p>Aug 20, 2024</p>
            </div>
            <p>TECHNOLOGY</p>
        </div>
        <div class="relative w-[520px] h-[280px] rounded">
            <div class="absolute top-0 left-0 w-full h-full shadow-inner-large-streamcard rounded z-10"></div>
            <img src="../assets/images/nvidia-aerial.png" class="w-full h-full object-cover rounded mt-2">
            <p id="title" class="absolute left-9 -bottom-6 text-xl underline z-20">Boosting AI-Driven Innovation in 6G with the AI-RAN Alliance, 3GPP, and O-RAN</p>
            <div class="absolute top-10 left-0 -translate-x-full w-fit px-0.5 py-4 bg-base-yellow rounded-tl rounded-bl">
                <p class="__taglabel text-white">TECH</p>
            </div>
        </div>
        <div class="relative w-[520px]">
            <p class="mt-8">The pace of 6G research and development is picking up as the 5G era crosses the midpoint of the decade-long cellular generation time frame. In this blog post,...</p>
            <div class="flex flex-row items-center justify-between mt-5">
                <div class="flex flex-row items-center">
                    <i class="bi bi-clock-history text-sm"></i>
                    <p class="text-xs mx-2">5 MIN READ</p>
                </div>
                <div class="flex flex-row items-center">
                    <button class="mx-5">
                        <i class="bi bi-hand-thumbs-up text-base"></i>
                        <p class="text-xs mx-1 inline">10</p>
                    </button>
                    <button>
                        <i class="bi bi-chat-left-dots text-base"></i>
                        <p class="text-xs mx-1 inline">5</p>
                    </button>
                </div>
            </div>
            <div class="w-full h-1 bg-[#D9D9D9] mt-5 mb-8"></div>
        </div>
    </div>
</template>

<script>
</script>

<style>
    #title::first-line {
        @apply text-white;
        @apply underline decoration-white;
    }

    .__taglabel{
        writing-mode: vertical-rl;
        transform: rotate(180deg);
    }
</style>