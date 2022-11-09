<script lang="ts">

</script>

<section>
    <div class="calendar">
        calendar
    </div>
    <div class="list">
        <slot></slot>
    </div>
    <div class="search">
        search
    </div>
</section>

<style lang="sass">
    section
        overflow-y: auto
        .list
            column-count: 2
            column-gap: var(--gap-sm)
        // display: grid
        // gap: var(--gap-sm)
        // grid-column: 1/2
        // grid-row: 1/2
</style>