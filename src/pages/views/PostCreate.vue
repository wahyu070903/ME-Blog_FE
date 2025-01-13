<template>
    <!-- this shit should wrap in <div> dude i did'nt know why -->
    <div class="">  
        <ckeditor
            v-model="editor_data"
            :editor="ClassicEditor"
            :config="config"
        />
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
                <button type="button" class="focus:outline-none text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-sm text-sm px-2.5 py-1.5 me-2 mb-2 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-400">
                    <i class="bi bi-floppy-fill text-base mr-2"></i>
                    <span class="text-sm">Draft</span>
                </button>
                <button v-on:click="publishPost" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounden-sm text-sm px-2.5 py-1.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    <i class="bi bi-send-fill text-base mr-2"></i>
                    <span class="text-sm">Publish</span>
                </button>
            </div>
        </div>
        <ToastManager ref="toastManager"/>
    </div>
</template>

<style>
    .ck-content h1 {
        font-size: 2em;
        font-weight: bold;
        margin: 1em 0;
    }

    .ck-content h2 {
        font-size: 1.5em;
        font-weight: bold;
        margin: 1em 0;
    }
    .ck-content h3 {
        font-size: 1.25em; 
        font-weight: bold; 
        color: #333; 
        margin: 0.75em 0; 
        line-height: 1.4;
    }
    .ck-content p {
        font-size: 1em;
        margin: 0.5em 0;
    }
    .ck-powered-by{
        display: none !important;
    }

</style>
<script setup>
    import axios from 'axios';
    import { ref, computed } from 'vue';
    import ToastManager from '@/components/ToastManager.vue';
    import { 
            ClassicEditor,
            Essentials, 
            Paragraph, 
            Bold, 
            Italic,
            Code,
            Strikethrough,
            Subscript,
            Superscript,
            Underline,
            Autoformat,
            Heading,
            Image,
            ImageInsert,
            ImageResizeEditing,
            ImageResizeHandles,
            ImageToolbar,
            ImageStyle,
            ImageResize,
            ImageCaption,
            LinkImage,
            Indent,
            IndentBlock,
            BlockQuote,
            CodeBlock,
            MediaEmbed,
        } from 'ckeditor5';

    import { Ckeditor } from '@ckeditor/ckeditor5-vue';
    import 'ckeditor5/ckeditor5.css';

    const editor_data = ref();
    const post_title = ref();
    const post_rtime = ref();
    const post_desc = ref();
    const post_tag = ref();
    const post_thumbnail = ref(null);

    const post_title_valid = ref(true);
    const post_rtime_valid = ref(true);
    const post_desc_valid = ref(true);
    const post_tag_valid = ref(true);

    const uploadedImages = ref([]);
    const toastManager = ref(null);
    window.alert = function() {};   //disable default alert
    class UploadAdapter {
        constructor( loader ) {
            // The file loader instance to use during the upload.
            this.loader = loader;
        }

        // Starts the upload process.
        upload() {
            return this.loader.file
			.then( file => new Promise( ( resolve, reject ) => {
                const endpoints = 'http://127.0.0.1:8000/api/upload'
                const fileData = new FormData()
                fileData.append('image', file)
                axios.post(endpoints, fileData)
                    .then(response => {
                        console.log(response.data.url)
                        showSuccessToast('image uploaded to server')
                        this.uploadedImageUrl = response.data.url
                        uploadedImages.value.push(this.uploadedImageUrl)
                        resolve({
                            default: response.data.url
                        });
                    })
                    .catch(error => {
                        if (error.response && error.response.status === 422) {
                            showErrorToast(error.response.data.message);
                        }else{
                            showErrorToast('Failed to upload Image! ');
                        }
                        reject(error);
                    })
			}));
        }

        // Aborts the upload process.
        abort() {
            // Reject the promise returned from the upload() method.
            server.abortUpload();
        }

        deleteImage(imageUrl) {
            if (this.uploadedImageUrl) {
                axios
                    .delete("http://127.0.0.1:8000/api/image-delete", {
                        data: {
                            imagePath: imageUrl,
                        },
                    })
                    .then((response) => {
                        showSuccessToast(response.data.message)
                    })
                    .catch((error) => {
                        showErrorToast("Error deleting image")
                        console.error(
                            "Error deleting the image:",
                            error.response?.data?.message || error.message
                        );
                    });
            }
        }
    }

    function UploadAdapterPlugin( editor ) {
        editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
            const adapter = new UploadAdapter(loader);

            // Attach event listener for image deletion
            editor.model.document.on("change:data", () => {
                const content = editor.getData();
                const currentImages = Array.from(
                    content.matchAll(/<img[^>]+src="([^">]+)"/g)
                ).map((match) => match[1]);

                const deletedImages = uploadedImages.value.filter(
                    (image) => !currentImages.includes(image)
                );

                deletedImages.forEach((image) => {
                    adapter.deleteImage(image);
                    const index = uploadedImages.value.indexOf(image);
                    if (index !== -1) {
                        uploadedImages.value.splice(index, 1);
                    }
                });
            });

            return adapter;
        };
    }

    function handleThumbnailChange(event){
        post_thumbnail.value = event.target.files[0];
    }

    // post create function
    function publishPost(){
        const endpoints = "http://127.0.0.1:8000/api/create-post"
        // validator
        post_title.value ? post_title_valid.value = true : post_title_valid.value = false;
        post_rtime.value ? post_rtime_valid.value = true : post_rtime_valid.value = false;
        post_desc.value ? post_desc_valid.value = true : post_desc_valid.value = false;
        post_tag.value ? post_tag_valid.value = true : post_tag_valid.value = false;

        console.log(post_title_valid.value)
        if(!(post_title_valid.value && post_rtime_valid.value && post_desc_valid.value && post_tag.value)){
            return;
        }

        const fileData = new FormData()
        fileData.append('title', post_title.value)
        fileData.append('description', post_desc.value)
        fileData.append('rtime', post_rtime.value)
        fileData.append('tag', post_tag.value)
        fileData.append('thumbnail', post_thumbnail.value)
        fileData.append('content', editor_data.value)

        axios.post(endpoints, fileData)
            .then(response => {
                showSuccessToast(response.message.data)
            })
            .catch(error =>{
                if (error.response && error.response.status === 422) {
                    showErrorToast(error.response.data.message);
                }else{
                    showErrorToast('Failed to upload Image! ');
                }
            })
    }

    function showSuccessToast($message){
        toastManager.value?.addToast($message);
    }
    function showErrorToast($message){
        toastManager.value?.addToast($message,'error');
    }

    const config = computed( () => {
        return {
            licenseKey: 'GPL', // Or 'GPL'.
            plugins: [ 
                Essentials, 
                Paragraph, 
                Bold, 
                Italic,
                Code,
                Strikethrough,
                Subscript,
                Superscript,
                Underline,
                Autoformat,
                Heading,
                Image, 
                ImageInsert,
                UploadAdapterPlugin,
                ImageResizeEditing,
                ImageResizeHandles,
                ImageStyle,
                ImageResize,
                ImageToolbar,
                ImageCaption,
                LinkImage,
                Indent, 
                IndentBlock,
                BlockQuote,
                CodeBlock,
                MediaEmbed,
            ],
            toolbar: [ 'undo', 'redo', '|', 'heading','|', 'bold', 'italic', 'underline', 'strikethrough', 'code', 'subscript', 'superscript',"|",'insertImage','mediaEmbed',"|",'outdent', 'indent','blockQuote','|','codeBlock'],
            heading: {
                options: [
                    { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                    { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                    { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
                    { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' }
                ]
            },
            placeholder: 'Type the content here.....',
            image: {
                toolbar: [
                    "imageStyle:alignLeft",
                    "imageStyle:alignCenter",
                    "imageStyle:alignRight",
                    "|",
                    "resizeImage",
                    "|",
                    "toggleImageCaption",
                    "imageTextAlternative",
                    "|",
                    "linkImage",
                ],
                styles: ["alignLeft", "alignCenter", "alignRight"],
            },
            ui: {
                viewportOffset: {
                    top: 56,    //3.5rem
                },
            },
        };
    } );
</script>

