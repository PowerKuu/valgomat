<script setup lang="ts">
import { useStorage, useSessionStorage } from "@vueuse/core"


definePageMeta({
    layout: "valgomat"
})

const id = useRoute().params.id as string
const question = config.questions.find((value) => {
    return value.id === id
})

const sessionAnswers = useSessionStorage("answers", null as string | null)

const selectedAnswer = computed({
    get() {
        const parsedSessionAnswers = JSON.parse(sessionAnswers.value ?? "{}")
        const answer = parsedSessionAnswers?.[id] ?? null
        
        if (answer == null) return null
        return parseFloat(answer)
    },
    set(value: number | null) {
        let parsedSessionAnswers = JSON.parse(sessionAnswers.value ?? "{}")
        console.log(parsedSessionAnswers)

        parsedSessionAnswers[id] = value ?? null

        console.log(parsedSessionAnswers)

        sessionAnswers.value = JSON.stringify(parsedSessionAnswers)
    }
})

const answerEmojis = [
    {
        emoji: "🤮",
        score: 0
    },
    {
        emoji: "😒",
        score: 0.25
    },
    {
        emoji: "😵‍💫",
        score: 0.5
    },
    {
        emoji: "😊",
        score: 0.75
    },
    {
        emoji: "🤩",
        score: 1
    }
]

if (!question) {
    throw new Error("Question not found")
}


function setAnswer(answer: number) {
    if (selectedAnswer.value === answer) {
        return selectedAnswer.value = null
    }

    selectedAnswer.value = answer
}

function isAnswer(answer: number) {
    if (selectedAnswer.value === null) return true
    return selectedAnswer.value === answer
}
</script>

<template>
    <Flex class="question" direction="column" height="100%" justify="space-between">
        <Flex gap="1rem" direction="column">
            <h2>{{ question.text }}</h2>

            <Flex justify="center" gap="1rem">
                <p 
                    class="emoji" 
                    v-for="emoji of answerEmojis" 
                    :data-answer="isAnswer(emoji.score)" 
                    @click="setAnswer(emoji.score)"
                >
                    {{ emoji.emoji }}
                </p>
            </Flex>
        </Flex>

        <Flex direction="column" gap="2rem" align="center">

            <Flex gap="2rem" align="center">
                <NuxtLink class="button" :href="getQuestionUrlByOrder(question.order - 1)">
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

                <NuxtLink class="button" :href="getQuestionUrlByOrder(question.order + 1)">
                    <Button
                        color="var(--contrast-color)" 
                        gap="0.5rem" 
                        icon="/icons/arrow-right.svg" 
                        :reverse="true"
                    >
                        Neste
                    </Button>
            </NuxtLink>
            </Flex> 
        </Flex>
    </Flex>
</template>

<style scoped lang="scss">
.emoji {
    user-select: none;
    transition: 0.2s;

    font-size: 3rem;
    cursor: pointer;

    &[data-answer="false"] {
        opacity: 0.25;
    }
}
</style>