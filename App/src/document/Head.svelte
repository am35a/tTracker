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

        --color-button: hsl(0, 0%, 50%)
        --background-color-button: hsl(0, 0%, 85%) 

        --color-button-disabled: hsl(215, 100%, 50%)
        --background-color-button-disabled: hsl(215, 100%, 85%)
        
        --color-button-mute: hsl(215, 100%, 85%)
        --background-color-button-mute: hsl(215, 100%, 95%)

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


        --color-0: hsl(216, 98%, 52%)
        --color-light-0: hsl(216, 98%, 86.6%)
        --color-1: hsl(261, 51%, 51%)
        --color-light-1: hsl(261, 51%, 85%)
        --color-2: hsl(354, 70%, 53%)
        --color-light-2: hsl(354, 70%, 88.3%)
        --color-3: hsl(45, 100%, 51%)
        --color-light-3: hsl(45, 100%, 85%)
        --color-4: hsl(162, 72%, 46%)
        --color-light-4: hsl(162, 72%, 76.6%)
        --color-5: hsl(263, 90%, 51%)
        --color-light-5: hsl(263, 90%, 85%)
        --color-6: hsl(330, 66%, 52%)
        --color-light-6: hsl(330, 66%, 86.6%)
        --color-7: hsl(27, 98%, 53%)
        --color-light-7: hsl(27, 98%, 88.3%)
        --color-8: hsl(152, 69%, 31%)
        --color-light-8: hsl(152, 69%, 51.6%)
        --color-9: hsl(190, 90%, 50%)
        --color-light-9: hsl(190, 90%, 83.3%)

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