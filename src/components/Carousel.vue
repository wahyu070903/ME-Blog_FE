<template>
    <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
        <SplideSlide>
            <p>World</p>
        </SplideSlide>
        <SplideSlide>
            <p>hello</p>
        </SplideSlide>
    </Splide>
</template>

<script>
    import { Splide, SplideSlide } from '@splidejs/vue-splide';
    
    export default {
        components: {
            Splide,
            SplideSlide,
        },
    };
</script>

<style>
    @import '@splidejs/splide/dist/css/themes/splide-default.min.css';
</style>