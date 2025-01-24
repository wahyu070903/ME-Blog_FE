<template>
    <div class="bg-gray-50 dark:bg-gray-900 w-screen h-screen">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <div class="max-w-sm mx-auto">
                        <div class="w-full flex flex-col items-center justify-center space-y-4">
                            <p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">We already sent 6-digit code to your email.</p>
                            <div class="flex mb-2 space-x-2 rtl:space-x-reverse">
                                <div v-for="(element, index) in code_digit">
                                    <input v-on:input="inputHandler($event, index)" v-on:keydown.backspace="deleteHandler($event, index)" type="text" maxlength="1" autocomplete="off" class="__pin-input block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-blue-400 focus:border-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                            </div>
                            <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Didn't receive code?</p>
                            <p v-if="!counter_finish" class="mt-2 text-sm text-gray-500 dark:text-gray-400">{{ formatCounter }}</p>              
                            <button v-if="counter_finish" v-on:click="resendCode" class=" text-sm text-blue-600 hover:underline dark:text-blue-500">
                                Resend code
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script> 
    export default{
        data(){
            return{
                counter_preset: 125, // 125 second
                counter: 0,
                code_digit: 6,  //constant
                auto_check: false,
                counter_running: false,
                counter_id: null,
                counter_finish: false,
            }
        },
        methods: {
            inputHandler(event, index){
                if(event.inputType === 'deleteContentBackward') return 

                const input_element = document.querySelectorAll(".__pin-input")
                if(index < this.code_digit - 1){
                    input_element[index + 1].focus()
                }
                (index == this.code_digit - 1) ? this.auto_check = true : this.auto_check = false 
            },
            deleteHandler(event, index){
                event.preventDefault()
                const input_element = document.querySelectorAll(".__pin-input")
                input_element[index].value = ""
                if(index > 0){
                    input_element[index - 1].focus()
                }
            },
            startCounter(){
                if(this.counter_running) return 
                this.counter_running = true
                this.counter = this.counter_preset
                this.counter_id = setInterval(() =>{
                    if(this.counter > 0){
                        this.counter--
                    }
                    if(this.counter == 0){
                        this.counter_finish = true
                        this.stopCounter()
                    }
                }, 1000)
            },
            stopCounter(){
                clearInterval(this.counter_id)
                this.counter_running = false
            },
            resetCounter(){
                this.stopCounter()
                this.counter = this.counter_preset
                this.counter_finish = false
                this.startCounter()
            },
            resendCode(){
                this.resetCounter()
            },
        },
        mounted() {
            this.startCounter()
        },
        computed:{
            formatCounter(){
                let minutes = Math.floor(this.counter / 60)
                let second = this.counter % 60
                if(minutes < 10){
                    minutes = `0${minutes}`
                }
                if(second < 10){
                    second = `0${second}`
                }
                const format = `${minutes}:${second}`
                return format
            }
        }
    }
</script>