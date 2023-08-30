<script setup lang="ts">
defineProps<{
    top: string
    left: string
    scale: number
    rotate: string
    icon: string
}>()
</script>

<template>
    <img :src="icon" class="icon"/>
</template>

<style scoped lang="scss">
.icon {
    position: absolute;

    width: 1rem;
    height: 1rem;

    scale: v-bind(scale);

    top: v-bind(top);
    left: v-bind(left);

    filter: blur(0.5px);

    opacity: 0.5;

    animation: rotate 10s linear infinite;
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}


</style>