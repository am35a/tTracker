<script lang="ts">
    import { organization, user } from '$str/store'
</script>

<header>
    <div>
        <span class="title">{$user.page.titlesArr[$user.page.current]}</span>
        {#if $user.page.current === 1}
            <span class="subtitle" style="--color-light: var(--color-light-{$organization.color})"> : {$organization.name}</span>
        {/if}
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <svg
        on:click={() => $user.page.current = 5}
        class:active={$user.page.current === 5}
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"
    >
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
    </svg>
</header>

<style lang="sass">
    header
        display: grid
        gap: var(--gap-xs)
        grid-template-columns: 1fr max-content
        padding: var(--padding-xs) var(--padding-sm)
        align-self: center
        background-color: var(--face-background-color)
        color: var(--mute-color-25)
        font-size: var(--font-size-lg)
        .title
            font-weight: 700
        .subtitle
            --color-light: currentColor
            color: var(--color-light)
            font-weight: 500
        .active
            color: var(--main-color-75)
</style>