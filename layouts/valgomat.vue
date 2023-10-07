<script setup lang="ts">
const iconMap: {
    top: string
    left: string
    scale: number
    rotate: string

    icon: string
}[] = []

const iconCount = 30

for (let i = 0; i < iconCount; i++) {
    const icon = parties[Math.floor(Math.random() * parties.length)]

    iconMap.push({
        top: `${Math.random() * 90}%`,
        left: `${Math.random() * 100}%`,
        rotate: `${Math.random() * 360}deg`,
        scale: Math.random() * 2 + 2,

        icon: getPartyIconPath(icon)
    })
}
</script>

<template>
    <Flex class="page" align="center" direction="column">
        <Flex class="content" direction="column" gap="1rem">
            <slot></slot>
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
    z-index: 3;
}

.content {
    padding: 3rem;
    width: 30rem;

    height: 30rem;
    

    text-align: center;

    background-color: white;
    margin-top: 5rem;

    border-radius: 0.5rem;

    box-shadow: 0px 0px 50px 1px white;
}
</style>