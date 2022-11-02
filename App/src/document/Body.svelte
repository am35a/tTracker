<script lang="ts">
    import { user } from '../store/store'

    $: if($user.isAuthorized) document.body.classList.toggle('inside')
</script>

<svelte:body/>

<style lang="sass" global>
    body
        position: relative
        height: 100%
        &:not(.inside)
            display: grid
            overflow: hidden
</style>