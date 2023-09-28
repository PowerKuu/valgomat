<script setup lang="ts">
import { useSessionStorage } from '@vueuse/core';

const sessionAnswers = useSessionStorage("answers", null as string | null)

sessionAnswers.value = null
</script>

<template>
    <ClientOnly>
        {{ sessionAnswers }}
    </ClientOnly>
</template>

<style scoped lang="scss">

</style>