<script lang="ts">
    import { fly } from 'svelte/transition'
</script>

<main transition:fly="{{ x: -200, duration: 500 }}">
    <slot></slot>
</main>

<style lang="sass">
    main
        grid-column: 1/2
        grid-row: 1/2
        display: grid
        gap: var(--gap-sm)
        margin: auto
</style>