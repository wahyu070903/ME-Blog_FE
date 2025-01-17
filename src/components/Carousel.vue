<template>
    <div class="flex flex-row items-center justify-center w-[150%]">
        <button class="hidden md:block px-1.5 py-10 rounded mr-8 bg-base-yellow" @click="goToPrev">
            <i class="bi bi-chevron-left text-[32px] text-white"></i>
        </button>
        <div class="w-full">
            <Splide :options="options" aria-label="My Favorite Images" ref="splide">
                <SplideSlide v-for="data in carousel_data" class="my-1">
                    <Card :post_id =data.id :img_src = data.thumbnail :post_date = data.created_at :post_title = data.title :post_desc = data.description :read_time = data.rtime />
                </SplideSlide>
                <!-- Hidden element to center last card !Important -->
                <SplideSlide>
                    <div class="hidden"></div>
                </SplideSlide>
            </Splide>
        </div>
        <button class="hidden md:block px-1.5 py-10 rounded ml-8 bg-base-yellow" @click="goToNext">
            <i class="bi bi-chevron-right text-[32px] text-white"></i>
        </button>
    </div>
</template>

<script>
    import { Splide, SplideSlide } from '@splidejs/vue-splide';
    import { defineComponent } from 'vue';
    import Card from './Card.vue'

    export default defineComponent({
        components: {
            Splide,
            SplideSlide,
            Card
        },
        props : {
            carousel_data : {
                type : Object,
                required : true,
            }
        },
        setup() {
            const options = {
                perPage : 3,
                perMove : 1,
                gap : '1rem',
                arrows: false,
                pagination : false,
                breakpoints : {
                    640 : {
                        perPage : 2,
                        gap : '0.5rem',
                        
                    }
                }
            };

            return {options}
        },
        methods : {
            goToPrev(){
                this.$refs.splide.go('<');
            },
            goToNext(){
                this.$refs.splide.go('>');
            }
        }
    });
</script>

<style>
    @import '@splidejs/splide/dist/css/themes/splide-default.min.css';
</style>