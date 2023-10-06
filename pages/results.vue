<script setup lang="ts">
import { useSessionStorage } from '@vueuse/core';
definePageMeta({
    layout: "valgomat"
}) 

function restart() {
    sessionAnswers.value = null
}

const sessionAnswers = useSessionStorage("answers", null as string | null)

const parsedAnswers = computed<{
    [key: string]: number
}>(() => JSON.parse(sessionAnswers.value ?? "{}"))


const results = computed(() => {
    const defaultResult = {
        score: 0.5,
        maxScore: 1
    }

    const sumAnswers: {
        [party: string]: {
            score: number
            maxScore: number
        }
    } = Object.fromEntries(
        parties.map((party) => ([party, defaultResult]))
    )

    for (const [questionId, answer] of Object.entries(parsedAnswers.value)) {
        const question = config.questions.find(q => q.id === questionId)
        if (!question) continue

        for (const [party, partyAnswer] of Object.entries(question.ranks)) {
            const existingAnswer = structuredClone(sumAnswers[party])
    
            existingAnswer.score += 1 - Math.abs(answer - partyAnswer)
            existingAnswer.maxScore += 1

            sumAnswers[party] = existingAnswer
        }
    }

    return Object.entries(sumAnswers).map(([key, value]) => {
        return {
            party: key,
            score: (value.score / value.maxScore)
        }
    }).sort((a, b) => b.score - a.score)
})
</script>

<template>
    <Flex class="question" direction="column" height="100%" justify="space-between">
        <Flex gap="1rem" direction="column">
            <h2>Resultater</h2>

        </Flex>

        <Flex direction="column" gap="2rem" align="center">

            <Flex direction="column">
                <Flex v-for="result of results">
                    {{ result.party }}

                    <p>{{ result.score }}</p>
                </Flex>
            </Flex>

            <Flex gap="1rem">
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

                <NuxtLink @click="restart" href="/intro">
                    <Button
                        color="var(--contrast-color)" 
                        gap="0.5rem" 
                        icon="/icons/arrow-right.svg" 
                        :reverse="true"
                    >
                        Ta på nytt
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