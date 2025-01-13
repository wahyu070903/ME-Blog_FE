<template>
    <div class="relative overflow-x-auto">
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
                    <td class="px-6 py-4 text-nowrap">
                        {{ list.tag }}
                    </td>
                    <td class="px-6 py-4">
                        {{ list.type }}
                    </td>
                    <td class="px-6 py-4 text-nowrap">
                        {{ list.post_at }}
                    </td>
                    <td class="px-6 py-4">
                        <div class="flex flex-row items-center space-x-1" >
                            <button v-on:click="showDeleteModal(list.id)" class="px-1.5 py-1 bg-red-200 rounded-sm">
                                <i class="bi bi-trash3"></i>
                            </button>
                            <a class="px-1.5 py-1 bg-blue-200 rounded-sm" href="#">
                                <i class="bi bi-pencil-square"></i>
                            </a>
                            <button v-on:click="showDetailModal(list.id)" class="px-1.5 py-1 bg-green-200 rounded-sm" href="#">
                                <i class="bi bi-eye"></i>
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- Pagination -->
        <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4 pb-4 px-4" aria-label="Table navigation">
            <span class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span class="font-semibold text-gray-900 dark:text-white">{{ (paginate_activePage) * paginate_perPage - paginate_perPage + 1 }} - {{ (paginate_activePage) * paginate_perPage }}</span> of <span class="font-semibold text-gray-900 dark:text-white">{{ paginate_totalItems }}</span></span>
            <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                <li>
                    <button v-on:click="paginatePrev" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</button>
                </li>
                <button v-for="(element, index) in generatePaginateArray" v-on:click="paginateTo(element)">
                    <li class="__paginate-btn" :class="{'__paginate-active' : element === paginate_activePage}">
                        <a class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{{ element }}</a>
                    </li>
                </button>
                <li>
                    <button v-on:click="paginateNext" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</button>
                </li>
            </ul>
        </nav>
        <!-- Modal -->
        <div id="delete-modal" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-1/2 right-1/2 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <input type="hidden" id="delete-modal-id">
            <div class="flex w-full h-full items-center justify-center">
                <div class="relative w-full max-w-md max-h-full">
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button type="button" v-on:click="hideDeleteModal" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
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
                            <button v-on:click="deleteRecord(1)" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                                Yes, I'm sure
                            </button>
                            <button v-on:click="hideDeleteModal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">No, cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="detail-modal" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-1/2 right-1/2 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div v-if="detailData" class="flex w-full h-full items-center justify-center mt-4">
                <div class="relative w-3/4 bg-white shadow dark:bg-gray-700 rounded">
                    <div class="w-full h-40">
                        <img :src="'/src/assets/images/' + detailData.thumbnail" class="w-full h-full object-cover rounded-t">
                    </div>
                    <div class="pt-4 px-4">
                        <div class="w-3/4 flex flex-row items-center mb-2">
                            <h6 class="w-fit line-clamp-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ detailData.title }}</h6>
                            <div class="bg-blue-500 px-1.5 py-1 w-fit rounded-sm mx-4">
                                <p class="text-xs font-normal text-white">{{ detailData.tag }}</p>
                            </div>
                        </div>
                        <p class="w-3/4 line-clamp-3 mb-3 font-normal text-gray-700 dark:text-gray-400">{{ detailData.description }}</p>
                        <div class="w-1/2 relative overflow-x-auto shadow-md sm:rounded-lg mb-4">
                            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <tbody>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Post at
                                        </th>
                                        <td class="px-6 py-4">
                                            {{ detailData.post_at }} 
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Read Time
                                        </th>
                                        <td class="px-6 py-4">
                                            {{ detailData.rtime }} Minutes
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Post Type
                                        </th>
                                        <td class="px-6 py-4">
                                            {{ detailData.type }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <button v-on:click="hideDetailModal" class="w-8 h-8 bg-white rounded absolute top-4 right-4 hover:ring-2 hover:ring-gray-300">
                        <i class="bi bi-x-lg"></i>
                    </button>
                </div>  
            </div>
        </div>
    </div> 
</template>

<style>
    .__paginate-active a{
        background-color: #e5e7eb;
        color: #2563eb;
    }
</style>

<script>
    import axios from 'axios';

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
                max_visible_paginate: 5,
            
                // Modal 
                deleteModal: null,

                // Modal data
                detailData: null,
            }
        },
        methods: {
            async fetchData(start){
                const address = 'http://127.0.0.1:8000/api'
                const endpoint = `${address}/paginate/${start}`;
                this.list_success = false
                try{
                    const response = await axios.get(endpoint)
                    const resp_data = response.data.data
                    this.lists = resp_data
                    this.list_success = true
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
                    console.log(this.paginate_totalItems)
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
            paginateTo(target){
                this.paginate_activePage = target
                const start = (this.paginate_activePage - 1) * this.paginate_perPage
                this.fetchData(start + 1)
            },
            toggleFilter(){
                console.log("click")
            },
            showDeleteModal(itemID){
                const delete_modal = document.getElementById("delete-modal")
                const hidden_id = document.getElementById('delete-modal-id')
                delete_modal.classList.remove("hidden")
                hidden_id.value = itemID
            },
            hideDeleteModal(){
                const delete_modal = document.getElementById('delete-modal')
                const hidden_id = document.getElementById('delete-modal-id')
                delete_modal.classList.add('hidden')
                hidden_id.value = 0
            },
            showDetailModal(itemID){
                const detail_modal = document.getElementById('detail-modal')
                detail_modal.classList.remove('hidden')
                const endpoint = `http://127.0.0.1:8000/api/getbyid/${itemID}`
                axios.get(endpoint)
                    .then((response) =>{
                        const data = response.data.data[0]
                        this.detailData = data
                        console.log(this.detailData)
                    })
                    .catch((error)=>{
                        console.log(error)
                    })
            },
            hideDetailModal(){
                const detail_modal = document.getElementById('detail-modal')
                detail_modal.classList.add('hidden')
                this.detailData = null
            },
            deleteRecord(){
                const hidden_id = document.getElementById('delete-modal-id').value
                const endpoint = `http://127.0.0.1:8000/api/deletebyid/${hidden_id}`
                axios.get(endpoint)
                    .then((response) => {
                        const message = response.data.message
                        console.log(message)
                    })
                    .catch((error)=>{
                        console.log(error)
                    })
                this.hideDeleteModal()
                this.fetchData(1)
            }
        },
        mounted(){
            this.paginate_activePage = 1
            this.countData()
            this.fetchData(1)
        },
        watch: {
            paginate_totalItems(newValue){
                this.paginate_totalPaginateButton = Math.ceil(newValue / this.paginate_perPage)
            },
        },
        computed: {
            generatePaginateArray(){
                const offset = Math.floor(this.max_visible_paginate / 2)
                const total_button = Math.ceil(this.paginate_totalItems / this.paginate_perPage)
                const l_offset = offset
                const r_offset = total_button - offset

                let newArray = [];
                if(this.paginate_activePage < l_offset + 1){
                    for(let i = 1 ; i <= this.max_visible_paginate; i++){
                        newArray.push(i)
                    }
                }
                else if(this.paginate_activePage > r_offset){
                    for(let i = total_button ; i > total_button-this.max_visible_paginate; i--){
                        newArray.push(i)
                    }
                    newArray.reverse()
                }
                else{
                    for(let i = this.paginate_activePage - offset; i <= this.paginate_activePage + offset ; i++){
                        newArray.push(i);
                    }
                }
                return newArray
            }
        }
    }
</script>