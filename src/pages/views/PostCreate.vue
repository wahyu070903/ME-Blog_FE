<template>
    <div>
        <div>
            <PostEditor 
                @trigger-success-toast="showSuccessToast"
                @trigger-error-toast="showErrorToast"
                @update:editor="updateEditorData"
            />
        </div>
        <PostParam 
            @publish-action="publishContent"
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
            return{
                editor_data: "",
            }
        },
        components:{
            PostEditor,
            ToastManager,
            PostParam,
        },
        methods:{
            updateEditorData(newContent){
                this.editor_data = newContent
            },
            publishContent(data){
                const endpoint = "http://127.0.0.1:8000/api/create-post"
                data.append("content", this.editor_data)
                axios.post(endpoint, data)
                    .then(response => {
                        console.log(response)
                        const message = response.data.message
                        this.showSuccessToast(message)
                    })
                    .catch(error => {
                        console.log(error)
                        const message = error.response.data.message
                        console.log(message)
                        this.showErrorToast(message)
                    })
            },
            showSuccessToast(message){
                this.$refs.toastManagerRef.addToast(message)
            },
            showErrorToast(message){
                this.$refs.toastManagerRef.addToast(message,'error')
            },
        }
    }
</script>