<script lang="ts">
    import { appData } from '$str/store'
</script>

<svelte:head>
    <meta charset="UTF-8"/>
    <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
    <meta name="viewport" content="width=device-width, initial-scale={$appData.initialScale}">
    <title>{$appData.title}</title>
    <link rel="stylesheet" href="/css/normalize.css">
</svelte:head>

<style lang="sass" global>
    :root
        --main-background-color: rgba(248, 249, 250, 1)
        --main-color-75: rgba(0, 2, 4, .75)
        --mute-color-25: rgba(0, 2, 4, .25)
        --face-background-color: rgba(255, 255, 255, 1)
        --error-color: rgba(200, 10, 10, 1)

        --hr-color: rgba(0, 2, 4, .15)

        --header-color: var(--mute-color-25)
        --header-title-color: var(--main-color-75)

        --footer-color: var(--mute-color-25)
        --footer-active-color: var(--main-color-75)

        --background-color-form: rgba(0, 2, 4, .05) 
        --color-form: rgba(0, 2, 4, .25)
        --outline-color-form: rgba(0, 2, 4, .25)
        --border-color-form: rgba(0, 2, 4, .25)

        --background-color-button: rgba(0, 2, 4, .05) 
        --background-color-button-disabled: rgba(14, 110, 256, .25) 
        --color-button: rgba(0, 2, 4, .25)
        --color-button-disabled: rgba(14, 110, 256, 1)

        --height-form-lg: 48px
        --height-form-md: 32px
        --height-form-sm: 24px

        --box-shadow-color: rgba(100, 100, 100, .15)
        --box-shadow-lg: 0px 4px 8px var(--box-shadow-color)
        --box-shadow-md: 0px 3px 6px var(--box-shadow-color)
        --box-shadow-sm: 0px 2px 4px var(--box-shadow-color)

        --padding-lg: 32px
        --padding-md: 24px
        --padding-sm: 16px
        --padding-xs: 8px
 
        --margin-lg: 32px
        --margin-md: 24px
        --margin-sm: 16px
        --margin-xs: 8px

        --gap-lg: 32px
        --gap-md: 24px
        --gap-sm: 16px
        --gap-xs: 8px

        --border-radius-lg: 16px
        --border-radius-md: 12px
        --border-radius-sm: 8px
        --border-radius-xs: 4px

        --font-size-lg: 18px
        --font-size-md: 16px
        --font-size-sm: 14px
        --font-size-xs: 12px

        --section-width: 256px

    *,
    ::before,
    ::after
        padding: 0
        margin: 0
        box-sizing: inherit
        background-repeat: no-repeat
        user-select: none

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
</style>