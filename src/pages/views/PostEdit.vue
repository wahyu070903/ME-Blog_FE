<template>
    <div>
        <div v-if="fetch_data_status">
            <PostEditor 
                :content="fetch_data.content"
                @trigger-success-toast="showSuccessToast"
                @trigger-error-toast="showErrorToast"
                @update:editor="updateEditorData"
            />
        </div>
        <PostParam v-if="fetch_data_status"
            :param_title="fetch_data.title"
            :param_desc="fetch_data.description"
            :param_rtime="fetch_data.rtime"
            :param_tag="fetch_data.tag"
            :param_content="fetch_data.content"
            @edit-action="editPost"
        />
        <ToastManager ref="toastManagerRef" />
    </div>
</template>

<script>
    import axios from 'axios';
    import PostEditor from '../../components/PostEditor.vue'
    import ToastManager from '@/components/ToastManager.vue';
    import PostParam from '@/components/PostParam.vue';

    export default{
        data(){
            return {
                content_id: null,
                fetch_data: null,
                fetch_data_status: null,
                editor_data: "",
            }
        },
        components: {
            PostEditor,
            ToastManager,
            PostParam,
        },
        mounted(){
            this.content_id = this.$route.params.id
            this.fetchContent()
        },
        methods:{
            updateEditorData(newContent){
                this.editor_data = newContent
            },  
            fetchContent(){
                const endpoint = "http://127.0.0.1:8000/api/getbyid/"
                axios.get(endpoint + this.content_id)
                    .then(response => {
                        response = response.data.data[0]
                        this.fetch_data = response
                        this.fetch_data_status = true
                    })
                    .catch(error =>{
                        console.log(error)
                        this.fetch_data_status = false
                    })
            },
            showSuccessToast(message){
                this.$refs.toastManagerRef.addToast(message)
            },
            showErrorToast(message){
                this.$refs.toastManagerRef.addToast(message,'error')
            },
            editPost(data){
                const endpoint = 'http://127.0.0.1:8000/api/editpost/'
                data.append("content", this.editor_data )
                axios.post(endpoint + this.content_id, data)
                    .then(response =>{
                        const message = response.data.message
                        this.showSuccessToast(message)
                    })
                    .catch(error =>{
                        const message = error.response.data.message
                        console.log(message)
                        this.showErrorToast(message)
                    })
            },
        },
    }
</script>