<script setup lang="ts">
import { useAutoAnimate } from "@formkit/auto-animate/vue"

const [ autoAnimateElement ] = useAutoAnimate()
</script>

<template>
    <div ref="autoAnimateElement">
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">

</style>