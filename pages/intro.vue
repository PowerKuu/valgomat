<script setup lang="ts">
definePageMeta({
    layout: "valgomat"
})

const githubLink = "https://github.com/PowerKuu"
</script>

<template>
    <Flex direction="column" grow="1" gap="0.5rem">
        <Flex direction="column">
            <h1>Valgtomat 2023</h1>
            <p class="weak">En valgomat laget av Håkon i nuxt <a :href="githubLink">(Min gitub)</a></p>
        </Flex>

        <Flex align="center" direction="column" gap="2rem"  grow="1">
            <Flex gap="0.5rem">
                <img v-for="icon of possibleIcons" class="icon" :src="getFullIconPath(icon)" alt="">
            </Flex>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, est eligendi repellendus quis expedita repudiandae autem pariatur dolores. Beatae id, distinctio architecto quos laudantium tenetur soluta ut sunt nam vero!</p>
            
            <NuxtLink class="button" :href="`/question/${getNextQuestionID(-1)}`">
                <Button
                    :iconHover="true" 
                    color="var(--contrast-color)" 
                    gap="0.5rem" 
                    icon="/icons/arrow-right.svg" 
                    :reverse="true"
                >
                    Start valgtomaten
                </Button>
            </NuxtLink>
        </Flex>
    </Flex>
</template>

<style scoped lang="scss">
.button {
    margin-top: auto;
}
</style>