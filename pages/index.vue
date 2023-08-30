<script setup lang="ts">
const iconMap: {
    top: string
    left: string
    scale: number
    rotate: string

    icon: string
}[] = [
]

const possibleIcons = ["ap.png", "frp.png", "høyre.png", "krf.png", "mdg.png", "rødt.png", "sp.png", "sv.png", "venstre.png"] //"🍅"] //["🤮", "😒", "😵‍💫", "😊", "😍"]
const iconCount = 30

const githubLink = "https://github.com/PowerKuu"

function getFullIconPath(icon: string) {
    return `/icons/partier/${icon}`
}

for (let i = 0; i < iconCount; i++) {
    const icon = possibleIcons[Math.floor(Math.random() * possibleIcons.length)]

    iconMap.push({
        top: `${Math.random() * 90}%`,
        left: `${Math.random() * 100}%`,
        rotate: `${Math.random() * 360}deg`,
        scale: Math.random() * 2 + 2,

        icon: getFullIconPath(icon)
    })
}
</script>

<template>
    <Flex class="page" align="center" direction="column">


        <Flex class="content" align="center" direction="column" gap="1rem">
            <Flex direction="column">
                <h1>Valgtomat 2023</h1>
                <p class="weak">En valgomat laget av Håkon i nuxt <a :href="githubLink">(Min gitub)</a></p>
            </Flex>

            <Flex align="center" direction="column" gap="2rem">
                <Flex gap="0.5rem">
                    <img v-for="icon of possibleIcons" class="icon" :src="getFullIconPath(icon)" alt="">
                </Flex>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, est eligendi repellendus quis expedita repudiandae autem pariatur dolores. Beatae id, distinctio architecto quos laudantium tenetur soluta ut sunt nam vero!</p>
            
                <Button 
                    :iconHover="true" 
                    color="var(--contrast-color)" 
                    gap="0.5rem" 
                    icon="/icons/arrow-right.svg" 
                    :reverse="true"
                >
                    Start valgtomaten
                </Button>
            </Flex>
        </Flex>
    </Flex>

    <IconBackground
        v-once
        v-for="icon of iconMap"
        :top="icon.top" 
        :left="icon.left" 
        :rotate="icon.rotate"
        :scale="icon.scale"
        :icon="icon.icon"
    ></IconBackground>
</template>

<style scoped lang="scss">
.page {
    position: relative;
    z-index: 1;
}

.content {
    padding: 3rem;
    max-width: 30rem;
    text-align: center;

    background-color: white;
    margin-top: 5rem;

    border-radius: 0.5rem;

    box-shadow: 0px 0px 50px 1px white;
}
</style>