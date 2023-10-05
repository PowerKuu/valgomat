<script setup lang="ts">
import { useSessionStorage } from '@vueuse/core';
definePageMeta({
    layout: "valgomat"
}) 

const sessionAnswers = useSessionStorage("answers", null as string | null)

const parsedAnswers = computed<{
    [key: string]: number
}>(() => JSON.parse(sessionAnswers.value ?? "{}"))


const answers = computed(() => {
    const sumAnswers: {
        [key: string]: {
            score: number
            count: number
        }
    } = {}
})
</script>

<template>
    <Flex class="question" direction="column" height="100%" justify="space-between">
        <Flex gap="1rem" direction="column">
            <h2>Resultater</h2>

        </Flex>

        <Flex direction="column" gap="2rem" align="center">

            {{ sessionAnswers }}

            <Flex gap="2rem" align="center">
                <NuxtLink class="button" :href="getQuestionUrlByOrder(config.questions.length)">
                    <Button
                        color="var(--contrast-color)" 
                        gap="0.5rem" 
                        icon="/icons/arrow-right.svg" 
                        :reverse="true"
                        :iconBefore="true"
                    >
                        Forrige
                    </Button>
                </NuxtLink>
            </Flex> 
        </Flex>
    </Flex>
</template>

<style scoped lang="scss">
.button {
    margin-top: auto;
}
</style>