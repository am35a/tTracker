<script lang="ts">
        import { fly } from 'svelte/transition'
</script>

<section>
    <slot name="calendar"></slot>
    <div class="list" transition:fly="{{ x: +200, duration: 500 }}">
        <slot></slot>
    </div>
    <slot name="filter"></slot>
</section>

<style lang="sass">
    section
        grid-column: 1/-1
        grid-row: 2/3
        display: grid
        grid-template-columns: 1fr
        grid-template-rows: max-content 1fr
        overflow: hidden
        .list
            grid-column: 1/2
            grid-row: 2/3
            display: grid
            grid-template-columns: repeat(2, 1fr)
            gap: var(--gap-sm)
            padding: var(--padding-sm)
            align-content: start
            // column-count: 2
            // column-gap: var(--gap-sm)
            overflow-y: auto
            overflow-x: hidden
</style>