<template>
    <div class="flex flex-row w-full space-x-8">
        <div class="w-1/2">
            <div v-if="editor" class="container">
                <div class="control-group space-x-1">
                    <button @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }" class="px-1 py-0.5">
                        <i class="bi bi-type-bold"></i>
                    </button>
                    <button @click="editor.chain().focus().toggleUnderline().run()" :class="{ 'is-active': editor.isActive('underline') }" class="px-1 py-0.5">
                        <i class="bi bi-type-underline"></i>
                    </button>
                    <button @click="setLink" :class="{ 'is-active': editor.isActive('link') }">
                        <i class="bi bi-link-45deg"></i>
                    </button>
                    <button @click="editor.chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
                        <i class="bi bi-type-italic"></i>
                    </button>
                </div>
            </div>
            <editor-content :editor="editor" />
        </div>
        <div class="w-1/2 bg-green-400">
            <p>Preview</p>
        </div>
    </div>
</template>

<script>
    import { Editor, EditorContent } from '@tiptap/vue-3'
    import Placeholder from '@tiptap/extension-placeholder'
    import Document from '@tiptap/extension-document'
    import Heading from '@tiptap/extension-heading'
    import Paragraph from '@tiptap/extension-paragraph'
    import Text from '@tiptap/extension-text'
    import Highlight from '@tiptap/extension-highlight'
    import Typography from '@tiptap/extension-typography'
    import Bold from '@tiptap/extension-bold'
    import Underline from '@tiptap/extension-underline'
    import Link from '@tiptap/extension-link'
    import Italic from '@tiptap/extension-italic'

    export default {
        components: {
            EditorContent,
        },
        data() {
            return {
                editor: null,
            }
        },
        mounted() {
            this.editor = new Editor({
                content: "",
                extensions: [
                    Document,
                    Placeholder.configure({
                        placeholder: "Write Something....."
                    }),
                    Heading.configure({
                        levels: [1, 2, 3],
                    }),
                    Paragraph,
                    Text,
                    Highlight,
                    Typography,
                    Bold,
                    Underline,
                    Link.configure({
                        openOnClick: false,
                        defaultProtocol: 'https',
                    }),
                    Italic,


                ],
                editorProps: {
                    attributes: {
                        class: 'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none',
                    },
                },
            })
        },
        methods: {
            setLink(){
                const previousUrl = this.editor.getAttributes('link').href
                const url = window.prompt('URL', previousUrl)

                // cancelled
                if (url === null) {
                    return
                }

                // empty
                if (url === '') {
                    this.editor
                    .chain()
                    .focus()
                    .extendMarkRange('link')
                    .unsetLink()
                    .run()

                    return
                }

                // update link
                this.editor
                    .chain()
                    .focus()
                    .extendMarkRange('link')
                    .setLink({ href: url })
                    .run()
            },
        },
        beforeUnmount(){
            this.editor.destroy()
        },
    }
</script>
<style lang="scss">
    /* Basic editor styles */
    .tiptap {
        :first-child {
            margin-top: 0;
        }

        /* Heading styles */
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            line-height: 1.1;
            margin-top: 2.5rem;
            text-wrap: pretty;
        }

        h1,
        h2 {
            margin-top: 3.5rem;
            margin-bottom: 1.5rem;
        }

        h1 {
            font-size: 1.4rem;
        }

        h2 {
            font-size: 1.2rem;
        }

        h3 {
            font-size: 1.1rem;
        }

        h4,
        h5,
        h6 {
            font-size: 1rem;
        }
        p.is-editor-empty:first-child::before {
            color: #ced4da;
            content: attr(data-placeholder);
            float: left;
            height: 0;
            pointer-events: none;
        }
        a {
            color: #6a0dad;
            cursor: pointer;
            text-decoration: underline;

            &:hover {
                color: #4c0070;
            }
        }
        
    }
    .is-active {
        background-color: #f4f4f4;
    }
</style>
