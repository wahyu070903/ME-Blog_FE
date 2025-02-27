<template>
    <nav id="navbar" class="fixed top-0 left-0 z-50 w-full overflow-hidden bg-black">
        <div class="hidden md:flex flex-col xl:mx-4">
            <div class="h-[72px] w-screen flex flex-row items-center justify-between mx-4 md:mx-auto md:w-[650px] lg:w-[1000px] xl:max-w-[1300px] xl:w-full">
                <RouterLink to="/">
                    <img class="h-9 w-auto" src="../assets/app_icons/app-logo-inline.svg" draggable="false">
                </RouterLink>
                <div>
                    <div class="flex flex-row items-center">
                        <div class="flex flex-row items-center">
                            <button id="active-lang" class="flex flex-row items-center mx-4 py-1.5 px-2 hover:bg-white/40 rounded-sm duration-200">
                                <i class="bi bi-globe text-2xl mr-2 text-white"></i>
                                <p class="text-white">EN</p>
                            </button>
                            <button id="signIn-btn" class="px-6 py-1.5 rounded-sm border border-white bg-white text-base-navy hover:bg-transparent hover:text-white duration-300">
                                <p class="">Sign in</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Mobile size modal -->
        <div class="relative w-screen flex flex-wrap items-center justify-between py-4 pl-4 pr-2 z-50 bg-black md:hidden">
            <RouterLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img class="h-9 w-auto" src="../assets/app_icons/app-logo-inline.svg" draggable="false">
            </RouterLink>
            <!-- Language Option -->
            <div class="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
                <button type="button" data-dropdown-toggle="language-dropdown-menu" class="inline-flex items-center font-medium justify-center px-3 py-1.5 text-sm text-white rounded-lg cursor-pointer hover:bg-gray-700 hover:text-white">
                    <i class="bi bi-globe text-xl"></i>
                    <span class="ml-2">EN</span>
                </button>
                <!-- Dropdown -->
                <div id="language-dropdown-menu" class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
                    <ul class="py-2 font-medium" role="none">
                    <li>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                        <div class="inline-flex items-center">
                            <img class="h-4 w-4 rounded-full me-2" src="../assets/app_icons/england-lang.png">
                            English (EN)
                        </div>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                        <div class="inline-flex items-center">
                            <img class="h-4 w-4 rounded-full me-2" src="../assets/app_icons/ind-lang.png">
                            Bahasa (ID)
                        </div>
                        </a>
                    </li>
                    </ul>
                </div>

                <!-- Burger Button -->
                <button data-collapse-toggle="navbar-hamburger" type="button" class="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            </div>
        </div>
        <div class="__navbar_burger relative hidden w-full py-4 px-6 bg-black z-40" id="navbar-hamburger">
            <form class="max-w-md mx-auto">   
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" autocomplete="off" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Post, Article..." required />
                    <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>

            <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <li>
                    <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded-t dark:bg-blue-600" aria-current="page">Feature</a>
                </li>
                <li>
                    <a href="#" class="block py-2 px-3 text-gray-900 hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">Feature</a>
                </li>
                <li>
                    <a href="#" class="block py-2 px-3 text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Toolbox</a>
                </li>
                <li>
                    <a href="#" class="block py-2 px-3 text-gray-900 rounded-b hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Category</a>
                </li>
            </ul>
            <div class="flex flex-row items-center justify-end mt-4">
                <button type="button" class="text-white bg-base-yellow hover:bg-base-yellow/90 focus:ring-4 focus:outline-none focus:ring-base-yellow/50 font-medium rounded-md text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:base-yellow/55 me-2 mb-2">
                    Sign in
                </button>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-700/90 focus:ring-4 focus:outline-none focus:ring-blue-700/50 font-medium rounded-md text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-blue-700/55 me-2 mb-2">
                    Sign up
                </button>
            </div>
        </div>
    </nav>
</template>

<style>
    .__navbar_burger{
        animation: scrollIn 0.5s ease-in-out forwards;
    }
    @keyframes scrollIn {
        from {
            transform: translateY(-100%);
        }
        to {
            transform: translateY(0);
        }
    }

    @keyframes scrollOut {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(-100%);
        }
    }

</style>

<script>
    import { initFlowbite} from 'flowbite'
    import anime from 'animejs/lib/anime.es.js';
import { RouterLink } from 'vue-router';

    export default{
        data(){
            return{
                active_expand_menus : null,
                active_expand_btn   : null,
                collapse_finish     : false,
            }
        },
        mounted(){
            initFlowbite()
            window.addEventListener("scroll", this.scrollObserver)

        },
        methods:{
            closeActiveMenus(){
                if(this.active_expand_btn && this.active_expand_menus != null){
                    this.active_expand_btn.classList.remove("__rotated")
                    this.active_expand_btn.style.transform = 'rotate(0deg)'
                    anime({
                        targets: this.active_expand_menus,
                        translateY: ['0%', '-100%'],
                        duration: 800,
                        opacity: [1, 0.8],
                        easing: 'easeOutExpo',
                        complete : ()=>{
                            this.collapse_finish = true
                        }
                    })
                    this.active_expand_btn = null
                    this.active_expand_menus = null
                }
            },
            expandMenus(event){
                const icon = event.currentTarget.querySelector(".__expandicon")
                const target = document.getElementById(event.currentTarget.dataset.target)
                // menus collapse
                if(icon.classList.contains("__rotated")){
                    icon.classList.remove("__rotated")
                    icon.style.transform = 'rotate(0deg)'
                    anime({
                        targets: target,
                        translateY: ['0%', '-100%'],
                        duration: 800,
                        opacity: [1, 0.8],
                        easing: 'easeOutExpo'
                    })
                    this.active_expand_menus =  null
                    this.active_expand_btn = null
                }
                // menus expand
                else{
                    this.closeActiveMenus()
                    icon.classList.add("__rotated")
                    icon.style.transform = 'rotate(-180deg)'
                    anime({
                        targets: target,
                        translateY: ['-100%', '0%'],
                        opacity: [0.8, 1],
                        duration: 800,
                        easing: 'easeOutExpo'
                    })
                    this.active_expand_menus = target
                    this.active_expand_btn = icon
                }
            },
            scrollObserver(){
                this.closeActiveMenus()
            }
        }
    }
</script>
