<template>
    <div class="fixed top-0 left-0 flex flex-col">
        <div class="h-[62px] w-screen flex flex-row items-center justify-between px-24 bg-base-navy">
            <div>
                <img  class="h-9 w-auto" src="../assets/app_icons/logoipsum.svg" draggable="false">
            </div>
            <div>
                <div class="flex flex-row items-center">
                    <div class="flex flex-row items-center">
                        <button id="active-lang" class="flex flex-row items-center mx-6">
                            <i class="bi bi-globe text-2xl mx-2 text-white"></i>
                            <p class="text-white">EN</p>
                        </button>
                        <button id="signIn-btn" class="px-6 py-2 rounded-sm border mr-3.5 border-white">
                            <p class="text-white">Sign in</p>
                        </button>
                        <button id="logIn-btn" class="px-6 py-2 rounded-sm border border-white bg-white">
                            <p class="text-base-navy">Get Started</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="px-24 h-14 w-screen flex flex-row items-center justify-between border border-[#CCCCCC]">
            <div class="flex flex-row items-center text-lg">
                <p class="mr-10">BLOG</p>
                <button class="mr-8">
                    <p>Features</p>
                </button>
                <button class="mr-8">
                    <p>Features</p>
                </button>
                <button class="mr-8 flex flex-row items-start">
                    <p class="mr-1.5">Toolbox</p>
                    <i class="bi bi-chevron-down text-sm mt-1.5"></i>
                </button>
            </div>
            <div class="flex flex-row items-center">
                <button class="flex flex-row items-start">
                    <p class="mr-1.5 text-lg">Category</p>
                    <i class="bi bi-chevron-down text-sm mt-1.5"></i>
                </button>
                <button class="flex flex-row items-center ml-6 py-1.5 px-5 rounded-sm bg-base-yellow">
                    <i class="bi bi-cup-hot text-xl text-white"></i>
                    <p class="ml-2 text-white">Support</p>
                </button>
                <button class="ml-6">
                    <i class="bi bi-search text-xl text-base-navy"></i>
                </button>
            </div>
        </div>
    </div>
</template>
