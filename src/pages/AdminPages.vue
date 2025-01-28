<template>
    <div v-if="fetch_success">
        <Sidebar />
        <div class="p-4 sm:ml-64">
            <div class="mt-14">
                <RouterView />
            </div>
        </div>
    </div>
</template>

<script>
    import Sidebar from '@/components/AdminComponent/Sidebar.vue'
    import axios from 'axios';

    export default{
        data(){
            return{
                isLoggedin: localStorage.getItem('loggedIn'),
                token: localStorage.getItem('token'),
                user: [],
                fetch_success: false,
            }
        },
        created(){
            axios.get("http://localhost:8000/api/user", {headers: {'Authorization': 'Bearer ' + this.token }})
                .then(response => {
                    this.user = response.data
                    this.fetch_success = true
                })
                .catch(() => {
                    return this.$router.push({
                        name : "not-found"
                    })
                })
        },
        components: {
            Sidebar
        },
        mounted(){
            if(!this.isLoggedin){
                return this.$router.push({
                    name : "not-found"
                })
            }
        }
    }
</script>