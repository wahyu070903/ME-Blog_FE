<template>
    <nav id="navbar" class="fixed top-0 left-0 z-50">
        <div class="hidden md:flex flex-col">
            <div class="h-[62px] w-screen flex flex-row items-center justify-between px-24 bg-base-navy z-50">
                <div>
                    <img class="h-9 w-auto" src="../assets/app_icons/logoipsum.svg" draggable="false">
                </div>
                <div>
                    <div class="flex flex-row items-center">
                        <div class="flex flex-row items-center">
                            <button id="active-lang" class="flex flex-row items-center mx-4 py-1.5 px-2 hover:bg-white/40 rounded-sm duration-200">
                                <i class="bi bi-globe text-2xl mr-2 text-white"></i>
                                <p class="text-white">EN</p>
                            </button>
                            <button id="signIn-btn" class="px-6 py-1.5 rounded-sm border mr-3.5 border-white text-white hover:bg-white hover:text-base-navy duration-300">
                                <p class="">Sign in</p>
                            </button>
                            <button id="logIn-btn" class="px-6 py-1.5 rounded-sm border border-white bg-white text-base-navy hover:bg-transparent hover:text-white duration-300">
                                <p class="">Get Started</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="px-24 h-14 w-screen flex flex-row items-center justify-between border border-[#CCCCCC] bg-white z-50">
                <div class="flex flex-row items-center text-lg">
                    <p class="mr-6 font-NotoSans">BLOG</p>
                    <button class="mr-4 px-4 py-1.5 rounded-sm hover:bg-gray-100 duration-200">
                        <p>Features</p>
                    </button>
                    <button class="mr-4 px-4 py-1.5 rounded-sm hover:bg-gray-100 duration-200">
                        <p>Features</p>
                    </button>
                    <button id="tools-menu-full-dropdown-button" data-target="tools-menu-full-dropdown" aria-expanded="false" @click="expandMenus" class="mr-4 flex flex-row items-start px-4 py-1.5 rounded-sm hover:bg-gray-100 duration-200">
                        <p class="mr-1.5">Toolbox</p>
                        <i class="__expandicon bi bi-chevron-down text-sm mt-1.5 transition-transform duration-200"></i>
                    </button>
                </div>
                <div class="flex flex-row items-center">
                    <button @click="expandMenus" data-target="category-menu-full-dropdown" class="flex flex-row items-start px-4 py-1.5 rounded-sm hover:bg-gray-100 duration-200">
                        <p class="mr-1.5 text-lg">Category</p>
                        <i class="__expandicon bi bi-chevron-down text-sm mt-1.5 transition-transform duration-200"></i>
                    </button>
                    <button class="flex flex-row items-center ml-3 py-1.5 px-5 rounded-sm bg-base-yellow hover:bg-base-yellow/80 focus:ring-4 focus:outline-none focus:ring-gray-100 duration-150">
                        <i class="bi bi-cup-hot text-xl text-white"></i>
                        <p class="ml-2 text-white">Support</p>
                    </button>
                    <button class="ml-2 px-2.5 py-1.5 rounded-sm hover:bg-gray-100 duration-200">
                        <i class="bi bi-search text-xl text-base-navy"></i>
                    </button>
                </div>
            </div>

            <div class="relative w-screen">
                <!-- Tools Modal -->
                <div id="tools-menu-full-dropdown" class="w-full absolute top-0 -translate-y-full border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600 z-[45]">
                    <div class="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
                        <ul>
                            <li>
                                <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <div class="flex flex-row items-center">
                                        <div class="w-12 h-12 bg-blue-400 flex items-center justify-center border border-blue-400 bg-blue-400/80 rounded">
                                            <i class="bi bi-joystick text-white text-xl"></i>
                                        </div>
                                        <div class="mx-4">
                                            <div class="font-semibold">Online Stores</div>
                                            <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <div class="font-semibold">Segmentation</div>
                                    <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <div class="font-semibold">Marketing CRM</div>
                                    <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <div class="font-semibold">Online Stores</div>
                                    <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <div class="font-semibold">Segmentation</div>
                                    <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <div class="font-semibold">Marketing CRM</div>
                                    <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Category Modal -->
                <div id="category-menu-full-dropdown" class="w-full absolute top-0 -translate-y-full border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600 z-[40]">
                    <div class="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
                        <ul>
                            <li>
                                <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <div class="flex flex-row items-center">
                                        <div class="w-12 h-12 bg-blue-400 flex items-center justify-center border border-blue-400 bg-blue-400/80 rounded">
                                            <i class="bi bi-joystick text-white text-xl"></i>
                                        </div>
                                        <div class="mx-4">
                                            <div class="font-semibold">Category Stores</div>
                                            <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <div class="font-semibold">Segmentation</div>
                                    <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <div class="font-semibold">Marketing CRM</div>
                                    <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <div class="font-semibold">Online Stores</div>
                                    <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <div class="font-semibold">Segmentation</div>
                                    <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <div class="font-semibold">Marketing CRM</div>
                                    <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-screen flex flex-wrap items-center justify-between mx-auto py-4 px-12 bg-base-navy md:hidden">
            <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img class="h-9 w-auto" src="../assets/app_icons/logoipsum.svg" draggable="false">
            </a>
            <button data-collapse-toggle="navbar-hamburger" type="button" class="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
            </button>
            <div class="hidden w-full" id="navbar-hamburger">
            <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <li>
                <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded dark:bg-blue-600" aria-current="page">Home</a>
                </li>
                <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Services</a>
                </li>
                <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">Pricing</a>
                </li>
                <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Contact</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>

</template>

<script>
    import { initFlowbite} from 'flowbite'
    import anime from 'animejs/lib/anime.es.js';

    export default{
        data(){
            return{
                active_expand_menus : null,
                active_expand_btn   : null,
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
                        easing: 'easeOutExpo'
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
