<script setup lang="ts">
const props = defineProps<{
    icon?: string,
    iconHover?: boolean,
    color?: string,
    gap?: string,
    iconBefore?: boolean,

    reverse?: boolean
}>()

const buttonColor = computed(() => props.color || "var(--color)")
</script>

<template>
    <Flex :gap="gap" class="button" align="center" justify="space-between" :data-reverse="!!reverse">
        <slot v-if="!iconBefore"></slot>
        <img :data-rotate="iconBefore" v-show="icon" :data-onlyHover="iconHover" class="icon" :src="icon"/>
        <slot v-if="iconBefore"></slot>
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

        &[data-rotate="true"] {
            transform: rotate(180deg);
        }
    }

    &:hover {
        img[data-onlyHover="true"] {
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