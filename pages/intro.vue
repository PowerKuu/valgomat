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
                <img v-for="party of parties" class="icon" :src="getPartyIconPath(party)" alt="">
            </Flex>

            <p>
                Denne valgomaten er laget for å hjelpe deg med å finne ut hvilket parti du er mest enig med.
                <br>
                <br>
                Dette er en veldig offisiell valgomat som ikke er et skole prosjekt!!
            </p>
            
            <NuxtLink class="button" :href="getQuestionUrlByOrder(1)">
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