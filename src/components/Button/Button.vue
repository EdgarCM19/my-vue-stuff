<template>
    <div>
        <button class="btn"
                @click="onClickFunction">
            <slot></slot>
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    props: {
        onClickFunction: {
            type: Function,
            required: true,
        }
    },
    setup(props, { emit }) {
        const theme = ref('')
        // const setTheme = () => {
        //     theme.value = localStorage.getItem('theme');
        // };

        // onMounted(setTheme)
        return {}
    }
})
</script>

<style lang="scss">
@import '_button.scss';
</style>
