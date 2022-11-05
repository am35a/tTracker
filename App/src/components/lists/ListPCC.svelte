<script lang="ts">
    import { user } from '../../store/store'
    import { fly } from 'svelte/transition'

    import Input from "../forms/Input.svelte"
    import Button from "../buttons/Button.svelte"
    
    export let countryCode = '' as string    
</script>

{#if $user.modalWindow === 'searchPCC'}
    <section transition:fly="{{ y: 200, duration: 500 }}">
        <div class="list">
            <div class="item">
                <img src="/countries/flags/us.svg" alt="">
                <span>United States of America</span>
            </div>
        </div>
        <Input value={countryCode} type={'search'} />
        <Button on:click={() => $user.modalWindow = ''}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>
        </Button>
    </section>
{/if}

<style lang="sass">
    section
        grid-row: 1/2
        grid-column: 1/2
        display: grid
        grid-template-columns: 1fr min-content
        grid-template-rows: 1fr min-content
        gap: var(--gap-sm)
        width: 256px
        height: 320px
        max-height: 80%
        margin: auto
        padding: var(--padding-sm)
        background-color: var(--face-background-color)
        border-radius: var(--border-radius-md)
        box-shadow: var(--box-shadow-lg)
        overflow: hidden
        .list
            grid-column: 1/3
            display: grid
            align-items: end
            overflow: auto
            .item
                display: flex
                gap: var(--gap-sm)
                height: 36px
                padding: 0 var(--padding-xs)
                align-items: center
                color: var(--color-form)
                &:not(:first-child)
                    border-top: 1px solid var(--border-color-form)
                span
                    flex-grow: 1
                img
                    height: 16px
</style>