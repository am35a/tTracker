<script lang="ts">
    import { fly } from 'svelte/transition'
</script>

<header transition:fly="{{ y: -200, duration: 1000 }}">
    <slot name="headerTitle"></slot>
    <slot name="headerSubtitle"></slot>
</header>

<style lang="sass">
    header
        grid-row: 1/2
        grid-column: 1/2
        padding-left: var(--padding-sm)
        padding-right: var(--padding-sm)
        color: var(--header-color)
        font-size: 12px
        :global(span)
            color: var(--header-title-color)
            font-size: var(--font-size-lg)
            font-weight: 700
</style>