<template>
    <div class="flex flex-row items-center">
        <button class="px-1.5 py-10 rounded mr-8 bg-base-yellow" @click="goToPrev">
            <i class="bi bi-chevron-left text-[32px] text-white"></i>
        </button>
        <Splide :options="options" aria-label="My Favorite Images" ref="splide">
            <SplideSlide v-for="count in 6" class="w-auto ">
                <Card />
            </SplideSlide>
        </Splide>
        <button class="px-1.5 py-10 rounded ml-8 bg-base-yellow" @click="goToNext">
            <i class="bi bi-chevron-right text-[32px] text-white"></i>
        </button>
    </div>
</template>

<script>
    import { Splide, SplideSlide } from '@splidejs/vue-splide';
    import Card from './Card.vue'

    export default {
        components: {
            Splide,
            SplideSlide,
            Card
        },

        setup() {
            const options = {
                rewind : false,
                perPage : 3,
                perMove : 1,
                arrows: false,
                pagination : false,
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
    };
</script>

<style>
    @import '@splidejs/splide/dist/css/themes/splide-default.min.css';
    .splide{
        max-width: 988px;
        /* 3 card width + padding 32px*2 */
    }
    .splide__slide{
        width: auto !important;
        margin-right: 32px;
    }
</style>