<template>
    <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
        <SplideSlide>
            <Card />
        </SplideSlide>
        <SplideSlide>
            <Card />
        </SplideSlide>
        <SplideSlide>
            <Card />
        </SplideSlide>
        <SplideSlide>
            <Card />
        </SplideSlide>
        <SplideSlide>
            <Card />
        </SplideSlide>
        <SplideSlide>
            <Card />
        </SplideSlide>
    </Splide>
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
    };
</script>

<style>
    @import '@splidejs/splide/dist/css/themes/splide-default.min.css';
</style>