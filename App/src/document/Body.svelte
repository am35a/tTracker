<script lang="ts">
    import { user } from '../store/store'

    $: if($user.isAuthorized) document.body.classList.toggle('inside')
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