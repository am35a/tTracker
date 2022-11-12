<script lang="ts">
    import { user } from '../../../store/store'
</script>

<footer>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={() => $user.page = 1}>
        <svg
            class={$user.page === 1 ? 'active' : ''}
            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
            <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM8 5a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5A.5.5 0 0 1 8 5z"/>
        </svg>
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={() => $user.page = 2}>
        <svg
            class={$user.page === 2 ? 'active' : ''}
            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
            <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1.146 6.854-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
        </svg>
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={() => $user.page = 3}>
        <svg
            class={$user.page === 3 ? 'active' : ''}
            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
        </svg>
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={() => $user.page = 4}>
        <svg
            class={$user.page === 4 ? 'active' : ''}
            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4 0h8a2 2 0 0 1 2 2v7H2V2a2 2 0 0 1 2-2zM2 12h12v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2zM.5 10a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H.5z"/>
        </svg>
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={() => $user.page = 5}>
        <svg
            class={$user.page === 5 ? 'active' : ''}
            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
            <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-2 11.5v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-2.5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1zm-3 0a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1z"/>
        </svg>
    </div>
</footer>

<style lang="sass">
    footer
        display: grid
        grid-template-columns: repeat(5, 1fr)
        padding: 0 var(--padding-xs)
        border-top-left-radius: var(--border-radius-lg)
        border-top-right-radius: var(--border-radius-lg)
        background-color: var(--face-background-color)
        box-shadow: var(--box-shadow-lg)
        div
            display: flex
            padding: var(--padding-xs) 0
            justify-content: center
            height: 32px
            align-items: center
            svg
                width: 32px
                transition: all 250ms
                &:not(.active)
                    color: var(--footer-color)
                    height: 24px
                &.active
                    color: var(--footer-active-color)
                    height: 32px
</style>