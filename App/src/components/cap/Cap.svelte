<div class="cap">
    <div class="handle">
        <hr>
    </div>
</div>

<style lang="sass">
    .cap
        grid-column: 1/2
        grid-row: 1/2
        align-self: start
        display: grid
        gap: var(--gap-xs)
        background-color: var(--face-background-color)
        border-bottom-left-radius: var(--border-radius-lg)
        border-bottom-right-radius: var(--border-radius-lg)
        box-shadow: var(--box-shadow-md)
        z-index: 1
        .handle
            display: grid
            height: 16px
            hr
                width: 48px
                margin: auto
                border: 2px solid currentColor
                border-radius: 2px
                color: var(--hr-color)        
</style>