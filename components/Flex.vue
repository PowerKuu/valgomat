<script setup lang="ts">
import { useAutoAnimate } from "@formkit/auto-animate/vue"

interface Props {
    tag: string
    gap: string,
    direction: "row" | "row-reverse" | "column" | "column-reverse",
    align: "start" | "center" | "end" | "stretch",
    justify: "start" | "center" | "end" | "stretch" | "space-around" | "space-between" | "space-evenly"
    alignSelf: "start" | "center" | "end" | "stretch" | "auto"
    justifySelf: "start" | "center" | "end" | "stretch" | "space-around" | "space-between" | "space-evenly" | "auto"
    grow: string,
    
    height: string
    width: string
}
const props = defineProps<Partial<Props>>()

const deafultProps:Props = {
    tag: "div",
    direction: "row",
    gap: "0",
    align: "stretch",
    justify: "stretch",
    alignSelf: "auto",
    justifySelf: "auto",
    grow: "0 1 auto",
    height: "auto",
    width: "auto"
}

function mergeProps(props1:Props, props2: Partial<Props>): Props  {
    const mergedProps = props1
    for (const [key, value] of Object.entries(props2)) {
        if (!value)  continue
        (mergedProps as any)[key] = value
    }

    return mergedProps
}

const { 
    tag, 
    direction, 
    gap, 
    align, 
    justify, 
    alignSelf, 
    justifySelf, 
    height, 
    width, 
    grow
} = mergeProps(deafultProps, props)
</script>

<template>
    <component class="flex" :is="tag">
        <slot></slot>
    </component>
</template>

<style scoped>
.flex {
    display: flex;
    flex-direction: v-bind(direction);
    gap: v-bind(gap);
    align-items: v-bind(align);
    justify-content: v-bind(justify);
    flex: v-bind(grow);
    align-self: v-bind(alignSelf);
    justify-self: v-bind(justifySelf);
    height: v-bind(height);
    width: v-bind(width);
}
</style>