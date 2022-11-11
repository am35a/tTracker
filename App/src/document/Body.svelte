<script lang="ts">
    import { user } from '../store/store'

    $: $user.isAuthorized ? document.body.classList.add('inside') : document.body.classList.remove('inside')

</script>

<svelte:body/>

<style lang="sass" global>
    body
        display: grid
        position: relative
        height: 100%
        &:not(.inside)
            overflow: hidden
</style>