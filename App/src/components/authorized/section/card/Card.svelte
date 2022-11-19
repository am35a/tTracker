<div class="card color-1">
    <div class="aside">
        <slot name="aside"/>
    </div>
    <div class="header">
        <slot name="header"/>
    </div>
    <div class="body">
        <slot name="body"/>
    </div>
    <div class="footer">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
            </svg>
            <span>
                <slot name="jobs"/>
            </span>
        </div>
    </div>
</div>

<style lang="sass">
    .card
        display: grid
        grid-template-columns: max-content 1fr
        grid-template-rows: repeat(3, max-content)
        gap: var(--gap-xs)
        border-radius: var(--border-radius-md)
        padding: var(--padding-xs)
        box-shadow: var(--box-shadow-sm)
        &.color
            &-1
                background-color: var(--color-light-1)
                .aside
                    background-color: var(--face-background-color)
        .aside
            grid-column: 1/2
            grid-row: 1/4
            width: 16px
            padding: var(--padding-xs)
            border-radius: var(--border-radius-sm)
        .header
            // padding-top: var(--padding-xs)
            font-size: var(--font-size-md)
            font-weight: 700
            color: var(--main-color-75)
        .body
            font-size: var(--font-size-sm)
        .footer
            display: grid
            grid-template-columns: 1fr 1fr
            // padding-bottom: var(--padding-xs)
            > div
                display: flex
                gap: var(--gap-xs)
                align-items: center
                color: var(--main-color-75)
                font-size: var(--font-size-xs)

</style>