<script lang="ts">
    import { fly } from 'svelte/transition'
</script>

<section transition:fly="{{ y: -200, duration: 1000 }}">
    <slot name="body"></slot>
</section>

<style lang="sass">
    section
        grid-row: 2/3
        grid-column: 1/2
        display: grid
        gap: var(--gap-md)
        width: var(--section-width)
        padding: var(--padding-md) var(--padding-lg)
        background-color: var(--face-background-color)
        border-radius: var(--border-radius-md)
        box-shadow: var(--box-shadow-lg)
</style>