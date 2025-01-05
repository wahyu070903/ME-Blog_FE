<template>
    <Sidebar />
    <div class="p-4 sm:ml-64">
        <div class="mt-14">
            <RouterView />
        </div>
    </div>
</template>

<script>
    import Sidebar from '@/components/AdminComponent/Sidebar.vue'

    export default{
        components: {
            Sidebar
        }
    }
</script>