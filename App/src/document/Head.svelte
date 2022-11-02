<script lang="ts">
    import { appData } from '../store/store'
</script>

<svelte:head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale={$appData.initialScale}">
    <title>{$appData.title}</title>
    <link rel="stylesheet" href="/css/normalize.css">
</svelte:head>

<style lang="sass" global>
    :root
        --main-background-color: rgba(248, 249, 250, 1)
        --main-color: rgba(0, 0, 0, .75)
        --face-background-color: rgba(255, 255, 255, 1)

        --box-shadow-color: rgba(0,0,0,0.15)
        --box-shadow-lg: 0px 2px 8px var(--box-shadow-color)
        --box-shadow-md: 0px 2px 6px var(--box-shadow-color)
        --box-shadow-sm: 0px 2px 4px var(--box-shadow-color)

        --border-radius-lg: 16px
        --border-radius-md: 12px
        --border-radius-sm: 8px
        --border-radius-xs: 4px

    *,
    ::before,
    ::after
        padding: 0
        margin: 0
        box-sizing: inherit
        background-repeat: no-repeat

    ::before,
    ::after
        text-decoration: inherit
        vertical-align: inherit

    html
        position: relative
        height: 100%
        background-color: var(--main-background-color)
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif
        color: var(--main-color)
        body
            position: relative
            height: 100%
</style>