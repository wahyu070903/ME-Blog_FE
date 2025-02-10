<template>
    <!-- this shit should wrap in <div> dude i did'nt know why -->
    <div class="prose xl:prose-lg font-roboto tracking-wide leading-[1.4]">  
        <ckeditor
            v-model="editor_data"
            :editor="ClassicEditor"
            :config="config"
            @input="updateParentData"
        />
    </div>
</template>

<style scoped>
    .prose{
        max-width: 100%;
    }
</style>

<script setup>
    import axios from 'axios';
    import { ref, computed, onMounted } from 'vue';
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

    const uploadedImages = ref([]);
    window.alert = function() {};   //disable default alert
    
    const props = defineProps({
        content: String
    })

    onMounted(() => {
        if (props.content != null) {
            editor_data.value = props.content;
        }
    });

    const emit = defineEmits([
        'trigger-success-toast',
        'trigger-error-toast',
        'update:editor',
    ])
    
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
                        emit('trigger-success-toast', 'image uploaded to server')
                        this.uploadedImageUrl = response.data.url
                        uploadedImages.value.push(this.uploadedImageUrl)
                        resolve({
                            default: response.data.url
                        });
                    })
                    .catch(error => {
                        if (error.response && error.response.status === 422) {
                            emit('trigger-error-toast', error.response.message)
                        }else{
                            emit('trigger-error-toast', 'failed to upload image!')
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
                        emit('trigger-success-toast', response.data.message)
                    })
                    .catch((error) => {
                        emit('trigger-error-toast', 'failed delete image!')
                        console.error(
                            "Error deleting the image:",
                            error.response?.data?.message || error.message
                        );
                    });
            }
        }
    }

    function updateParentData(){
        emit("update:editor", editor_data)
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
            mediaEmbed: {
                previewsInData: true
            },
            ui: {
                viewportOffset: {
                    top: 56,    //3.5rem
                },
            },
        };
    } );
</script>

