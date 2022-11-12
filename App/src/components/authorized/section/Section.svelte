<script lang="ts">
    import Filter from '../../filters/Type1.svelte'
</script>

<section>
    <div class="calendar">
        calendar
    </div>
    <div class="list">
        <slot></slot>
    </div>
    <Filter />
</section>

<style lang="sass">
    section
        display: grid
        grid-template-columns: 1fr
        grid-template-rows: max-content 1fr
        overflow-y: hidden
        .calendar
            grid-column: 1/2
            grid-row: 1/2
            align-self: start
        .list
            grid-column: 1/2
            grid-row: 2/3
            column-count: 2
            column-gap: var(--gap-sm)
            overflow-y: auto
            overflow-x: hidden
        // .search
        //     grid-column: 1/2
        //     grid-row: 2/3
        //     align-self: end
</style>