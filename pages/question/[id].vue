<script setup lang="ts">
definePageMeta({
    layout: "valgomat"
})

const id = useRoute().params.id as string
const question = config.questions.find((value) => {
    return value.id === id
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
</script>

<template>
    <Flex class="question" direction="column" height="100%" justify="space-between">
        <h2>{{ question.text }}</h2>

        <Flex direction="column" gap="2rem" align="center">
            <Flex justify="center" gap="1rem">
                <p class="emoji" v-for="emoji of answerEmojis">
                    {{ emoji.emoji }}
                </p>
            </Flex>

            <Flex gap="2rem" align="center">
                <NuxtLink class="button" :href="`/question/${getNextQuestionID(-1)}`">
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

                <NuxtLink class="button" :href="`/question/${getNextQuestionID(-1)}`">
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
    font-size:2.5rem;
}
</style>