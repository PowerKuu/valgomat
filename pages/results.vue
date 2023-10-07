<script setup lang="ts">
import { useSessionStorage } from '@vueuse/core'

definePageMeta({
    layout: "valgomat"
}) 

function restart() {
    sessionAnswers.value = null
}

const sessionAnswers = useSessionStorage("answers", null as string | null)

const parsedAnswers = computed<{
    [key: string]: number | null
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
        if (!question || answer == null) continue

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

const bestParty = computed(() => {
    const firstItem = results.value[0]
    const isAllEqual = results.value.every((value) => value.score === firstItem.score)

    return isAllEqual ? null : results.value[0]
})
</script>

<template>
    <Flex class="question" direction="column" height="100%" justify="space-between">
        <Flex gap="2rem" direction="column">
            <h1 v-if="!bestParty">Du har ingen meninger!</h1>

            <template v-else>
                <Flex align="center" direction="column" gap="1rem">
                    <h3>Ditt top parti er {{  capitalize(bestParty.party)}}!</h3>
                    <img class="icon" :src="getPartyIconPath(bestParty.party)" />
                </Flex>

                <Flex gap="1rem" direction="column">
                    <h4>Hvem er du enig med</h4>

                    <Flex class="leaderboard" align="center" justify="center" gap="1rem">
                        <Flex v-for="(result, index) of results">
                            <p>
                                {{ index + 1 }}. {{ capitalize(result.party) }} 
                                
                                <span :style="{ color: percentageToHsl(result.score, 0, 120) }">
                                    {{ (result.score * 100).toFixed(0) }}%
                                </span>
                            </p>
                        </Flex>
                    </Flex>
                </Flex>
            </template>
        </Flex>

        <Flex direction="column" gap="2rem" align="center">
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
                        icon="/icons/replay.svg" 
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
.leaderboard{
    flex-wrap: wrap;
}

.button {
    margin-top: auto;
}

.icon {
    min-width: 5rem;
    min-height: 5rem;
}

span {
    font-weight: 500;
}
</style>