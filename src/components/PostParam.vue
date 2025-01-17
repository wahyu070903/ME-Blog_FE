<template>
    <div class="flex flex-row justify-between mt-6">
        <div class="w-8/12 self-center">
            <form>
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label for="post_title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Post Title</label>
                        <input v-model="post_title" type="text" id="post_title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Something Interesting" required />
                        <p v-if="!post_title_valid" class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oh, snapp!</span> Value is required</p>
                    </div>
                    <div>
                        <label for="r_time" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Read Time</label>
                        <input v-model="post_rtime" type="number" id="r_time" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="5 Minutes" required />
                        <p v-if="!post_rtime_valid" class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oh, snapp!</span> Value is required</p>
                    </div>
                    <div>
                        <label for="post_description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Post Description</label>
                        <textarea v-model="post_desc" id="post_description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                        <p v-if="!post_desc_valid" class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oh, snapp!</span> Value is required</p>
                    </div>
                    <div>
                        <label for="post_tag" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Post Tag</label>
                        <select v-model="post_tag" id="post_tag" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="MECHANICAL" selected>MECHANICAL</option>
                            <option value="COMPUTER ENG">COMPUTER ENG</option>
                            <option value="TECHNOLOGY">TECHNOLOGY</option>
                            <option value="ELECTRONICS">ELECTRONICS</option>
                        </select>
                        <p v-if="!post_tag_valid" class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oh, snapp!</span> Value is required</p>
                    </div>
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="post_thumbnail">Upload file</label>
                        <input @change="handleThumbnailChange" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="post_thumbnail" type="file">
                    </div>
                </div>
            </form>
        </div>
        <div class="flex flex-row items-center self-start">
            <button v-if="editor_mode == 'CREATE'" type="button" class="focus:outline-none text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-sm text-sm px-2.5 py-1.5 me-2 mb-2 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-400">
                <i class="bi bi-floppy-fill text-base mr-2"></i>
                <span class="text-sm">Draft</span>
            </button>
            <button v-if="editor_mode == 'CREATE'" v-on:click="publishPost" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounden-sm text-sm px-2.5 py-1.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                <i class="bi bi-send-fill text-base mr-2"></i>
                <span class="text-sm">Publish</span>
            </button>
            <button v-if="editor_mode == 'EDIT'" v-on:click="editPost" type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-sm text-sm px-2.5 py-1.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                <i class="bi bi-send-fill text-base mr-2"></i>
                <span class="text-sm">Publish</span>
            </button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default{
        data(){
            return{
                post_id: null,
                post_title: '',
                post_desc: '',
                post_tag: '',
                post_rtime: '',
                post_thumbnail: '',
                post_title_valid: true,
                post_rtime_valid: true,
                post_desc_valid: true,
                post_tag_valid: true,
                editor_mode: null,
            }
        },

        props:{
            param_title: String,
            param_desc: String,
            param_tag: String,
            param_rtime: Number,
            param_thumbnail: String,
            param_content: String,
        },
        mounted(){
            this.post_id = this.$route.params.id
            const route_name = this.$route.name
            if(route_name == 'editPost'){
                this.editor_mode = 'EDIT'

                this.param_title && (this.post_title = this.param_title)
                this.param_desc && (this.post_desc = this.param_desc)
                this.param_tag && (this.post_tag = this.param_tag)
                this.param_rtime && (this.post_rtime = this.param_rtime)
                this.param_thumbnail && (this.post_thumbnail = this.param_thumbnail)
            }
            else if(route_name == 'createPost'){
                this.editor_mode = 'CREATE'
            }
        },
        methods: {
            editPost(){
                const endpoint = 'http://127.0.0.1:8000/api/edit/'
                const updated_data = {
                    "title"         : this.post_title,
                    "description"   : this.post_desc,
                    "tag"           : this.post_tag,
                    "rtime"         : this.post_rtime,
                    "thumbnail"     : this.post_thumbnail,
                    "content"       : this.param_content
                }
                axios.put(endpoint + this.post_id, updated_data)
                    .then(response =>{
                        const message = response.data.message
                        this.$emit('trigger-success-toast', message)
                    })
                    .catch(error =>{
                        const message = error.response.data.message
                        this.$emit('trigger-error-toast', message)
                    })
            },
        }
    }
</script>