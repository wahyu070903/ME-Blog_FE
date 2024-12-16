<template>
    <div class="flex flex-row items-center">
        <Navbar />
        <div class="w-full bg-green-200">
            <p>Ini panel konten</p>
        </div>
    </div>
</template>

<script>
    import Navbar from '../components/AdminComponent/Navbar.vue'
    export default{
        components :{
            Navbar,
        },
        data(){
            return {

            }
        }
    }
</script>