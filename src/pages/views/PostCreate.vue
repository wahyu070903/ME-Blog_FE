<template>
    <ckeditor
        v-model="data"
        :editor="ClassicEditor"
        :config="config"
        @destroy="onEditorDestroy"
    />
</template>
<style>
    /* Add this in your CSS file or in a <style> block */
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
        font-size: 1.25em; /* Adjust the font size */
        font-weight: bold; /* Make it bold */
        color: #333; /* Choose a color */
        margin: 0.75em 0; /* Add spacing above and below */
        line-height: 1.4; /* Adjust line height for better readability */
    }
    .ck-content p {
        font-size: 1em;
        margin: 0.5em 0;
    }

</style>
<script setup>
    import axios from 'axios';
    import { ref, computed } from 'vue';
    import { onBeforeUnmount,onMounted } from "vue";
    import { 
            ClassicEditor,
            Essentials, 
            Paragraph, 
            Bold, 
            Italic,
            Autoformat,
            Heading,
            Image,
            ImageInsert,
            ImageResizeEditing,
            ImageResizeHandles,
            ImageToolbar,
            ImageStyle,
        } from 'ckeditor5';

    import { Ckeditor } from '@ckeditor/ckeditor5-vue';
    import 'ckeditor5/ckeditor5.css';

    const data = ref();
    const uploadedImages = ref([]);

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
                        this.uploadedImageUrl = response.data.url;
                        uploadedImages.value.push(this.uploadedImageUrl);
                        resolve({
                            default: response.data.url
                        });
                    })
                    .catch(error => {
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
                        console.log("Image deleted successfully:", response.data.message);
                    })
                    .catch((error) => {
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

    const config = computed( () => {
        return {
            licenseKey: 'GPL', // Or 'GPL'.
            plugins: [ 
                Essentials, 
                Paragraph, 
                Bold, 
                Italic,
                Autoformat,
                Heading,
                Image, 
                ImageInsert,
                UploadAdapterPlugin,
                ImageResizeEditing,
                ImageResizeHandles,
                ImageStyle,
                ImageToolbar,
            ],
            toolbar: [ 'undo', 'redo', '|', 'bold', 'italic', '|', 'heading',"|",'insertImage',"|"],
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

