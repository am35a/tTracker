<script lang="ts">
    if ($$restProps.type != 'reset' && $$restProps.type != 'submit')
        $$restProps.type = 'button'
</script>

<button
    {...$$restProps}
    on:click
>
    <slot></slot>
</button>

<style lang="sass">
    button
        display: inline-grid
        grid-auto-flow: column
        gap: var(--gap-xs)
        justify-content: center
        align-items: center
        height: 32px
        margin: unset
        padding: 0 var(--padding-xs)
        border: none
        border-radius: 4px
        font-size: 14px
        font-weight: 600
        line-height: 1
        text-decoration: none
        user-select: none
        &:not(:disabled)
            color: rgba(0, 0, 0, .25)
            background-color: rgba(0, 0, 0, .05)
            cursor: pointer
        &:disabled
            color: rgba(14, 110, 256, 1)
            background-color: rgba(14, 110, 256, .25)
            cursor: not-allowed
</style>