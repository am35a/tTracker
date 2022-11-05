<!-- https://flagicons.lipis.dev/ -->
<script lang="ts">
    import {user} from '../../store/store'

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={() => $user.modalWindow = 'searchPCC'} type="buttons">
    <img src="/countries/flags/us.svg" alt="">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
    </svg>
</div>

<style lang="sass">
    div
        display: inline-flex
        align-items: center
        width: 32px
        height: 32px
        border-radius: 4px
        outline: 1px solid var(--outline-color-form)
        outline-offset: -1px
        color: var(--color-form)
        padding: 0 0 0 var(--padding-xs)
        cursor: pointer
        img
            height: 16px
        svg
            margin-left: auto

</style>