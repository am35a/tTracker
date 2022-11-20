<script lang="ts">
    import { fly } from 'svelte/transition'
    // import { user } from '$str/store'
    // !$user.isAuthorized
</script>

<main transition:fly="{{ x: +200, duration: 500 }}">
    <slot></slot>
</main>

<style lang="sass">
    main
        grid-column: 1/2
        grid-row: 1/2
        display: grid
        grid-template-rows: max-content 1fr max-content
        overflow-y: hidden
</style>