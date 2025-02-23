<template>
    <div class="w-full flex items-center justify-center py-6 text-[3.2vw] md:text-[14px] font-semibold text-gray-600">
        <div class="flex flex-row items-center space-x-2">
            <button v-on:click="paginatePrev" class="h-[9.2vw] w-[9.2vw] md:h-10 md:w-10 text-center">
                <i class="bi bi-chevron-left"></i>
            </button>
            <template v-for="item in getPaginateArr">
                <a href="#" :class="{'__pag-active': item == getRouterNum}" class="h-[7.45vw] w-[7.45vw] md:h-8 md:w-8 flex items-center justify-center" >
                    {{ item }}
                </a>
            </template>
            <button v-on:click="paginateNext" class="h-[9.2vw] w-[9.2vw] md:h-10 md:w-10 text-center">
                <i class="bi bi-chevron-right"></i>
            </button>
        </div>
    </div>
</template>

<style scoped>
    .__pag-active {
        color: white !important;
        background-color: #0496FF;
        border-radius: 100%;
    }
</style>

<script>
    export default {
        data(){
            return {
                max_visible_paginate: 5,
                per_page: 20,
                current_page: null,
            }
        },
        props: {
            total_item: Number,
            active_page: Number,
        },
        methods: {
            paginateNext(){
                if(this.current_page < this.paginate_totalPaginateButton){
                    const target = this.current_page + 1
                    this.$router.push({
                        name: "pagination",
                        params: {
                            num: target
                        }
                    })
                    this.current_page++
                }
            },
            paginatePrev(){
                if(this.current_page > 1){
                    const target = this.current_page - 1
                    this.$router.push({
                        name: "pagination",
                        params: {
                            num: target
                        }
                    })
                    this.current_page--
                }
            }
        },
        computed: {
            getPaginateArr(){
                const offset = Math.floor(this.max_visible_paginate / 2)
                const total_button = Math.ceil(this.total_item / this.per_page)
                const l_offset = offset
                const r_offset = total_button - offset

                let newArray = [];
                if(this.$route.params.num < l_offset + 1){
                    for(let i = 1 ; i <= this.max_visible_paginate; i++){
                        newArray.push(i)
                    }
                }
                else if(this.$route.params.num > r_offset){
                    for(let i = total_button ; i > total_button-this.max_visible_paginate; i--){
                        newArray.push(i)
                    }
                    newArray.reverse()
                }
                else{
                    for(let i = this.$route.params.num - offset; i <= this.$route.params.num + offset ; i++){
                        newArray.push(i);
                    }
                }
                return newArray
            },
            paginate_totalPaginateButton() {
                return Math.ceil(this.total_item / this.per_page);
            },
            getRouterNum(){
                return this.$route.params.num
            }
        },
        mounted(){
            this.current_page = this.active_page
        }
    }
</script>