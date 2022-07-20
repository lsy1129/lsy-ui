<!-- button.vue -->
<template>
    <button class="sy-button" :class="styleClass">
        <slot />
    </button>
</template>

<script lang="ts">
import './style/index.less'
import { defineComponent, computed } from 'vue'
import { buttonProps, ButtonType } from './types'

function isUnborderedButtonType(type: ButtonType | undefined) {
  return type === 'text' || type === 'link';
}

export default defineComponent({
    name: 'sy-button',
    props: buttonProps,
    setup(props) {

        const pre = 'sy-button'

        const { type, shape = 'default', ghost, block, danger } = props

        const styleClass = computed(() => {
            return {
                [`${pre}-${type}`]: type,
                [`${pre}-background-ghost`]: ghost && !isUnborderedButtonType(type),
                [`${pre}-dangerous`]: !!danger,
            }
        })

        return {
            styleClass,
        };
    },
});
</script>
