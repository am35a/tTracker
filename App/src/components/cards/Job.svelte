<div
    {...$$restProps}
    class:card={true}
    on:click
>
    <div class="aside">
        <slot name="aside">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
            </svg>
        </slot>
    </div>
    <div class="container">
        <div class="header">
            <slot name="header"/>
        </div>
        {#if $$slots.body}
            <div class="body">
                <slot name="body"/>
            </div>
        {/if}
        <div class="footer">
            <!-- <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
                </svg>
                <span>
                    <slot name="jobs"/>
                </span>
            </div> -->
            {#if $$slots.attachments}
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"/>
                    </svg>
                    <span>
                        <slot name="attachments"/>
                    </span>
                </div>
            {/if}
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5.009 5.009 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334z"/>
                </svg>
                <span>
                    <slot name="created"/>
                </span>
            </div>
        </div>
    </div>
</div>

<style lang="sass">
    .card
        display: grid
        grid-template-columns: max-content 1fr
        // grid-template-rows: auto// repeat(3, max-content)
        // grid-auto-rows: max-content
        gap: var(--gap-xs)
        border-radius: var(--border-radius-md)
        padding: var(--padding-xs)
        box-shadow: var(--box-shadow-sm)
        cursor: pointer
        outline-offset: -1px
        outline: 2px solid transparent
        transition: outline-color 250ms
        &.color
                background-color: var(--face-background-color)
                &.active
                    box-shadow: var(--box-shadow-md)
                    outline-color: var(--color)
                .aside
                    background-color: var(--color-light)
                    color: var(--color)
        .aside
            grid-column: 1/2
            grid-row: 1/-1
            display: grid
            width: 16px
            padding: var(--padding-xs)
            justify-content: center
            border-radius: var(--border-radius-sm)
            > :global(img)
                width: 100%
                max-width: 16px
                height: auto
                max-height: 16px
                overflow: hidden
        .container
            display: grid
            gap: var(--gap-xs)
            .header
                margin-top: auto
                font-size: var(--font-size-sm)
                font-weight: 700
                color: var(--main-color-75)
            .body
                font-size: var(--font-size-xs)
            .footer
                display: grid
                // grid-template-columns: 1fr 1fr
                grid-auto-flow: column
                margin-bottom: auto
                > div
                    display: flex
                    gap: var(--gap-xs)
                    align-items: center
                    color: var(--main-color-75)
                    font-size: var(--font-size-xs)
                    &:last-child
                        margin-left: auto

</style>