<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div class="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white dark:bg-gray-900">
            <div class="flex flex-row items-center space-x-4">
                <div>
                    <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                        <span class="sr-only">Sort button</span>
                        <i class="bi bi-sort-up mr-1.5 text-base"></i>
                        Latest
                        <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                        </svg>
                    </button>
                    <!-- Dropdown menu -->
                    <div id="dropdownAction" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                            <li>
                                <button href="#" class="block w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-start">
                                    Most Rated
                                </button>
                            </li>
                            <li>
                                <button href="#" class="block w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-start">
                                    Oldest
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <button v-on:click="toggleFilter" class="py-1 px-2 bg-blue-200 rounded-sm">
                        <i class="bi bi-funnel"></i>
                    </button>
                </div>
            </div>
            <label for="table-search" class="sr-only">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="text" id="table-search-users" class="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for post" autocomplete="off">
            </div>
        </div>
        <!-- Filter expansion -->
        <div class="px-12">
        </div>
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        id
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Title
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Tag
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Type
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Post Date
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(list, index) in lists" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th class="px-6 py-4">
                        {{ list.id }}
                    </th>
                    <td class="px-6 py-4">
                        <p class="line-clamp-3">{{ list.title }}</p>
                    </td>
                    <td class="px-6 py-4">
                        {{ list.tag }}
                    </td>
                    <td class="px-6 py-4">
                        {{ list.type }}
                    </td>
                    <td class="px-6 py-4">
                        {{ list.post_at }}
                    </td>
                    <td class="px-6 py-4">
                        <div class="flex flex-row items-center space-x-1" >
                            <button class="px-1.5 py-1 bg-red-200 rounded-sm" data-modal-target="delete-modal" data-modal-toggle="delete-modal">
                                <i class="bi bi-trash3"></i>
                            </button>
                            <a class="px-1.5 py-1 bg-blue-200 rounded-sm" href="#">
                                <i class="bi bi-pencil-square"></i>
                            </a>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4 pb-4 px-4" aria-label="Table navigation">
            <span class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span class="font-semibold text-gray-900 dark:text-white">1-10</span> of <span class="font-semibold text-gray-900 dark:text-white">1000</span></span>
            <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                <li>
                    <button v-on:click="paginatePrev" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</button>
                </li>
                <div v-for="(element, index) in paginate_totalPaginateButton">
                    <li class="__paginate-btn">
                        <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{{ index + 1 }}</a>
                    </li>
                </div>
                <li>
                    <button v-on:click="paginateNext" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</button>
                </li>
            </ul>
        </nav>
        <div id="delete-modal" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative p-4 w-full max-w-md max-h-full">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="delete-modal">
                         <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                    <div class="p-4 md:p-5 text-center">
                        <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg>
                        <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this post?</h3>
                        <button data-modal-hide="delete-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                            Yes, I'm sure
                        </button>
                        <button data-modal-hide="delete-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">No, cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {{ paginate_activePage }}
</template>

<style>
    .__paginate-active a{
        background-color: #e5e7eb;
        color: #2563eb;
    }
</style>

<script>
    import axios from 'axios';
    import { Modal } from 'flowbite';

    export default{
        data(){
            return {
                lists : [],
                list_error : false,
                list_success: false,
                paginate_perPage: 10,
                paginate_activePage: 1,
                paginate_totalItems: null,
                paginate_totalPaginateButton: null,
            }
        },
        methods: {
            toggleFilter(){
                console.log("click")
            },
            async fetchData(start){
                const address = 'http://127.0.0.1:8000/api'
                const endpoint = `${address}/paginate/${start}`;
                try{
                    const response = await axios.get(endpoint)
                    const resp_data = response.data.data
                    this.lists = resp_data
                    console.log(this.lists)
                }
                catch(error){
                    this.list_error = true
                    console.log(error)
                }
            },
            async countData(){
                const address = 'http://127.0.0.1:8000/api'
                const endpoint = `${address}/count`
                try{
                    const response = await axios.get(endpoint)
                    const resp_data = response.data.data
                    this.paginate_totalItems = resp_data
                }
                catch(error){
                    console.log(error)
                }
            },
            paginateNext(){
                if(this.paginate_activePage < this.paginate_totalPaginateButton){
                    const start = ((this.paginate_activePage + 1) * this.paginate_perPage) - this.paginate_perPage
                    this.fetchData(start + 1)
                    this.paginate_activePage++
                }
            },
            paginatePrev(){
                if(this.paginate_activePage > 1){
                    const start = ((this.paginate_activePage - 1) * this.paginate_perPage) - this.paginate_perPage
                    this.fetchData(start + 1)
                    this.paginate_activePage--
                }
            },
            paginateGoto(){
                
            }
        },
        mounted(){
            this.paginate_activePage = 1
            this.countData();
            this.fetchData(1)
        },
        watch: {
            paginate_totalItems(newValue){
                this.paginate_totalPaginateButton = newValue / this.paginate_perPage;
            },
            paginate_activePage(newValue){
                const button_element = document.querySelectorAll(".__paginate-btn");
                button_element.forEach((element, index) => {
                    const button_num = element.children[0].innerHTML
                    element.classList.remove("__paginate-active")
                    if(button_num == this.paginate_activePage){
                        element.classList.add("__paginate-active")
                    }
                })
            }
        }
    }
</script>