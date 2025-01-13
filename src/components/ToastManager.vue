<template>
    <div class="flex flex-col-reverse gap-0.5 fixed right-4 bottom-1 z-50">
        <div v-for="toast in toasts">
            <Toast class="toast"
                :key="toast.id"
                :message="toast.message"
                :type="toast.type"
                @close="removeToast(toast.id)"
            />
        </div>
    </div>
</template>

<style>
    .toast {
        animation: fadeIn 0.5s ease-out;
    }
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>

<script setup>
    import { ref } from 'vue';
    import Toast from './Toast.vue';

    const toasts = ref([]);

    const addToast = (message, type = 'success') => {
        const id = Date.now();
        toasts.value.push({ id, message, type });

        // Remove the toast after 5 seconds
        setTimeout(() => removeToast(id), 10000);
    };

    const removeToast = (id) => {
        toasts.value = toasts.value.filter((toast) => toast.id !== id);
    };

    defineExpose({
        addToast,
    })
</script>