<script setup lang="ts">
const props = defineProps<{
    icon?: string,
    iconHover?: boolean,
    color?: string,
    gap?: string,

    reverse?: boolean
}>()

const buttonColor = computed(() => props.color || "var(--color)")
</script>

<template>
    <Flex :gap="gap" class="button" align="center" justify="space-between" :data-reverse="!!reverse">
        <slot></slot>
        <img v-show="icon" :data-onlyHover="iconHover" class="icon" :src="icon"/>
    </Flex>
</template>

<style scoped lang="scss">
.button {
    --gap: v-bind(gap);
    --paddingHorizontal: 0.7rem;
    --buttonColor: v-bind(buttonColor);


    border: var(--buttonColor) 1px solid;
    background-color: var(--weak-color);
    color: var(--buttonColor) !important;

    border-radius: 0.25rem;
    padding: var(--paddingHorizontal) 1.25rem;

    transition: 0.2s;

    padding-left: calc(var(--paddingHorizontal) + var(--gap) * 2);

    &[data-reverse="false"]:hover, &[data-reverse="true"] {
        cursor: pointer;

        background-color: var(--buttonColor) !important;
        color: white !important;

        background-color: var(--weak-color);
        color: var(--buttonColor);

        img {
            filter: invert(1);
        }
    }

    img {
        transition: 0.2s;

        &[data-onlyHover="true"] {
            animation: hideIcon 0.2s forwards;
        }
    }

    &:hover {
        img {
            animation: showIcon 0.2s forwards;
        }
    }

    &[data-reverse="true"]:hover {
        opacity: 0.8;
    }

    p {
        color: inherit;
    }
}

@keyframes showIcon {
    0% {
        visibility: visible;
        scale: 0.2;

        width: 0px;
    }

    100% {
        scale: 1;
    }
}

@keyframes hideIcon {
    0% {
        scale: 1;
    }

    100% {
        scale: 0.2;
        visibility: none;

        width: 0px;
    }
}
</style>