<template>
    <div class="relative w-full h-full">
        <div v-if="on_fetching" class="absolute top-0 left-0 z-50">
            <div class="flex items-center justify-center w-screen h-screen opacity-80 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <div role="status">
                    <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        </div>
        <div class="realtive w-full h-full bg-gray-50 dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo">
                    Flowbite    
                </a>
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <div class="space-y-4 md:space-y-6">
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input v-model="input_email" type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" autocomplete="off">
                                <p v-if="login_failed" class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oops! </span>login failed please check your credentials!</p>
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <div class="relative w-full">
                                    <input v-model="input_password" type="password" name="password" id="password" placeholder="••••••••" class="pr-12 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <button v-on:click="togglePasswordVisible" class="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-gray-500  dark:text-gray-400">
                                        <i v-if="!password_visible" class="bi bi-eye px-2"></i>
                                        <i v-if="password_visible" class="bi bi-eye-slash px-2"></i>
                                        <span class="sr-only">toggle visibility</span>
                                    </button>
                                </div>
                                <p v-if="login_failed" class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oops! </span>login failed please check your credentials!</p>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input v-model="remember_option" id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800">
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Forgot password?</a>
                            </div>
                            <button v-on:click="login" class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Log-in
                            </button>
                            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                Doesn't have an account? <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Sign up</a>
                            </p>
                        </div>
                    </div>
                    <div class="separator px-6  flex items-center text-center after:border-t after:border-gray-300 after:dark:border-gray-600 before:border-t before:border-gray-300 before:dark:border-600">
                        <span class="text-sm font-light text-gray-500 dark:text-gray-400 mx-2">or</span>
                    </div>
                    <div class="px-6 my-4">
                        <button type="button" class="w-full text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
                            <svg class="w-5 h-5 me-2 -ms-1" viewBox="-0.5 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Color-" transform="translate(-401.000000, -860.000000)"><g id="Google" transform="translate(401.000000, 860.000000)"><path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"></path><path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"></path><path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"></path><path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"></path></g></g></g></svg>
                            <span class="text-sm font-medium text-gray-900 dark:text-white">Log-in with Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
  .separator::before,
  .separator::after {
    content: "";
    flex: 1;
  }
</style>

<script>
    import axios from 'axios'

    export default{
        data(){
            return{
                input_email: null,
                input_password: null,
                remember_option: false,
                password_visible: false,
                loggedIn: localStorage.getItem('loggedIn'),
                token: localStorage.getItem('token'),
                user: [],
                validation: [],
                login_failed: null,
                on_fetching: false,
            }
        },
        props: {
            card_mode: String,
        },
        methods:{
            login(){
                const endpoint = "http://127.0.0.1:8000/api/login"
                const data = new FormData()
                data.append("email", this.input_email)
                data.append("password", this.input_password)
                this.on_fetching = true
                axios.get('/sanctum/csrf-cookie').then(response => {
                    axios.post(endpoint, data)
                    .then(response => {
                        localStorage.setItem('loggedIn', 'true')
                        localStorage.setItem('token', response.data.token)
                        this.loggedIn = true

                        // redirecting
                        return this.$router.push({
                            name: "main-app"
                        })
                    })
                    .catch(error =>{
                        console.log(error)
                        this.login_failed = true
                        this.on_fetching = false
                    })
                });
            },
            togglePasswordVisible(){
                const password_field = document.getElementById("password")
                const is_password = password_field.type === 'password'

                password_field.type = is_password ? 'text' : 'password'

                this.password_visible = is_password ? true : false
            }
        }
    }
</script>