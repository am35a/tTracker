<script lang="ts">
    import { fly } from 'svelte/transition'
    
    import { user } from '../../store/store'

    import Button from "../buttons/Button.svelte"

</script>

{#if $user.modal.type}
    <section
        transition:fly="{{ y: 200, duration: 500 }}"
        style="color: var(--{$user.modal.type}-color)"
    >
        <header>
            {$user.modal.title}
        </header>
        <div>
            {$user.modal.text}
        </div>
        <Button on:click={() => $user.modal.type = ''}>CLOSE</Button>
    </section>
{/if}

<style lang="sass">
    section
        grid-row: 1/2
        grid-column: 1/2
        display: grid
        grid-template-rows: min-content 1fr
        gap: var(--gap-sm)
        width: 256px
        max-height: 80%
        margin: auto
        padding: var(--padding-sm)
        background-color: var(--face-background-color)
        border-radius: var(--border-radius-md)
        box-shadow: var(--box-shadow-lg)
        overflow: hidden
        header
            font-weight: 600
        div
            font-size: 14px
</style>